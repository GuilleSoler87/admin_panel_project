const express = require('express');
const router = express.Router()
const ProgramacionController = require('../controllers/ProgramacionController');

router.post('/create',ProgramacionController.create)
router.get('/getAll',ProgramacionController.getAll)
router.get('/getById/:_id',ProgramacionController.getById)
router.delete('/delete/:_id',ProgramacionController.delete)
router.put('/update/:_id',ProgramacionController.update)


module.exports = router;