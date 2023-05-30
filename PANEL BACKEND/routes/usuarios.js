const express = require('express');
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController');
const { authentication } = require("../middlewares/authentication");
const upload = require('../middlewares/multer'); 

router.post('/create',upload.single('imagen'),UsuarioController.create)
router.get('/getAllUsers',UsuarioController.getAll)
router.get('/getById/:_id',UsuarioController.getById)
router.delete('/delete/:_id',authentication,UsuarioController.delete)
router.put('/update/:_id',authentication,upload.single('imagen'),UsuarioController.update)
router.post('/login',UsuarioController.login)
router.delete('/logout',authentication,UsuarioController.logout)

module.exports = router;