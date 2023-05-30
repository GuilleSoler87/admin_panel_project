const express = require('express');
const router = express.Router()
const SponsorController = require('../controllers/SponsorController');
const upload = require('../middlewares/multer'); 


router.post('/create',upload.single('imagen'),SponsorController.create)
router.get('/getAllSponsors',SponsorController.getAll)
router.get('/getById/:_id',SponsorController.getById)
router.delete('/delete/:_id',SponsorController.delete)
router.put('/update/:_id',upload.single('imagen'),SponsorController.update)


module.exports = router;