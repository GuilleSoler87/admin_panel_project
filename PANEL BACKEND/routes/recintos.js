const express = require('express');
const router = express.Router()
const RecintoController = require('../controllers/RecintoController');
const upload = require('../middlewares/multer'); 

router.post('/create',upload.single('imagenRecinto'),RecintoController.create)
router.get('/getAllRecintos',RecintoController.getAll)
router.get('/getById/:_id',RecintoController.getById)
router.delete('/delete/:_id',RecintoController.delete)
router.put('/update/:_id',upload.single('imagenRecinto'),RecintoController.update)


module.exports = router;