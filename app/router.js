const express = require('express');
const router = express.Router();

//Importer les controllers
const mainController = require('./controllers/mainController');

// Indiquer les routes
router.get('/liste', mainController.homePage)
router.get('/detail/:id', mainController.pokemonDetail)

module.exports = router;

