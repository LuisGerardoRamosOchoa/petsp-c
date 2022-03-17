const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const userValidator = require("../validation/userValidator");
const jwtToken= require("../validation/jwtValidation");
router.get('/user', jwtToken.validateToken , userValidator.id, usersController.getUser);
router.get('/user', jwtToken.validateToken ,usersController.getUser);
router.get('/users', usersController.getUsers);
router.post('/user', userValidator.add , usersController.postUser);
router.put('/user', userValidator.update, usersController.putUser)
router.put('/user', usersController.putUser);
router.delete('/user', usersController.deleteUser);

module.exports = router;

