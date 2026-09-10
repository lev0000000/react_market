const router = require('express').Router()

const typeController = require('../controllers/typeController')

router.post('/create', typeController.create)

router.get('/all', typeController.getAll)

module.exports = router