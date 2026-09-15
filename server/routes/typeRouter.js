const router = require('express').Router()
const checkRole = require('../middleware/checkRoleMiddleware')

const typeController = require('../controllers/typeController')

router.post('/create', checkRole('ADMIN'), typeController.create)

router.get('/', typeController.getAll)

module.exports = router