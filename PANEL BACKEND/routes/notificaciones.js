const express = require('express');
const router = express.Router()
const NotificacionController = require('../controllers/NotificacionController');

router.post('/create',NotificacionController.create)
router.get('/getAll',NotificacionController.getAll)
router.get('/getById/:_id',NotificacionController.getById)
router.delete('/delete/:_id',NotificacionController.delete)
router.put('/update/:_id',NotificacionController.update)


module.exports = router;