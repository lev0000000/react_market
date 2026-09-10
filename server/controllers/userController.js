const ApiError = require('../error/ApiError')

class UserController {

    async registration(req, res) {
        res.json({message: 'registration'})
    }

    async login(req, res) {
        res.json({message: 'login'})
    }

    async check(req, res, next) {
        const query = req.query
        if(!query.id) {
            return next(ApiError.badRequest('Неверный запрос'))
        }
        res.json({message: 'check'})
    }
}

module.exports = new UserController()