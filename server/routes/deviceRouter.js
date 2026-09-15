const router = require('express').Router()
const deviceController = require('../controllers/deviceController')

router.post('/create', deviceController.create)

router.get('/', deviceController.getAll)

router.get('/:id', deviceController.getOne)

module.exports = router