module.exports = function (req, res, next){
    if(req.method === "OPTIONS"){
        next()
    }

    try{
        const token = req.headers.authorization.split(' ')[1]

        if(!token){
            return res.status(401).json({message: 'Не авторизован'})
        }

        const decoded = require('../helpers/helpers').jwtDecoder(token)

        console.log(decoded)

        req.user = decoded.userId

        next()

    }catch(e){
        return res.status(401).json({messsage: 'Не авторизован'})
    }
}