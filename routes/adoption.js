const express = require("express");
const { getAdoption } = require("../controllers/adoptionsController");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
const adoptionValidator = require('../validation/adoptionValidator');
router.get('/adoption', adoptionValidator.id, adoptionsController, getAdoption)
router.get('/adoption', adoptionsController.getAdoption);
router.get('/adoptions', adoptionsController.getAdoptions);
router.post('/adoption', adoptionsController.postAdoption);
router.put('/adoption', adoptionValidator.add,adoptionsController.putAdoption);
router.delete('/adoption', adoptionsController.deleteAdoption);
router.get('/adoptionUser', adoptionsController.getAdoptionByUser);

module.exports = router;