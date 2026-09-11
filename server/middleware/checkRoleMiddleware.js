module.exports = function (role) {
    return function (req, res, next) {

        if (req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1]

            if (!token) {
                return res.status(401).json({ message: 'Не авторизован' })
            }

            const decoded = require('../helpers/helpers').jwtDecoder(token)
            
            console.log(decoded)

            if(decoded.role !== role){
                return res.status(403).json({message: "нет доступа"})
            }


            req.user = decoded.userId

            next()

        } catch (e) {
            return res.status(401).json({ messsage: 'Не авторизован' })
        }
    }
}