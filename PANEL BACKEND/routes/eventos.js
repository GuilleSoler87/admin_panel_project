const express = require('express');
const router = express.Router()
const EventoController = require('../controllers/EventoController');

router.post('/create',EventoController.create)
router.put('/update/:_id',EventoController.update)


module.exports = router;