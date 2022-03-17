const express = require("express");
const { getPet } = require("../controllers/petsController");
const router = express.Router();
const petsController = require('../controllers/petsController');
const petsValidator = require('../validation/petValidator');
router.get('/pet', petsValidator.id, petsController, getPet)
router.get('/pet', petsController.getPet);
router.get('/pets', petsController.getPets);
router.post('/pet',petsValidator.add, petsController.postPet);
router.put('/pet', petsController.putPet);
router.delete('/pet', petsController.deletePet);

module.exports = router;