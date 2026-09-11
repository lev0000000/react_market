const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/model')
const helpers = require('../helpers/helpers')


class UserController {

    async registration(req, res, next) {
        try {
            const { email, password, role } = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Неверный запрос'))
            }

            const candidate = await User.findOne({ where: { email } })

            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }

            const hashPassword = await bcrypt.hash(password, 5)

            const user = await User.create({ email, password: hashPassword, role })
            const basket = await Basket.create({ userId: user.id })
            const token = helpers.jwtGenerator(user.id, password, role)
            return res.json({ token, user })
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        // return res.json({message: 'Пользователь успешно зарегистрирован'})
    }



    async login(req, res, next) {
        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }

        let comparePassword = await bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            return next(ApiError.badRequest('Неверный пароль'))
        }

        const token = helpers.jwtGenerator(user.id, password, user.role)
        return res.json({ token, user })


    }

    async check(req, res, next) {
        res.json({token: helpers.jwtGenerator(req.userId, req.password, req.role)})
    }
}

module.exports = new UserController()