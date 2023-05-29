const express = require('express');
const router = express.Router();

//Importer les controllers
const mainController = require('./controllers/mainController');
const typeController = require('./controllers/typeController');

// Indiquer les routes
router.get('/', mainController.homePage);
router.get('/detail/:id', mainController.pokemonDetail);
router.get('/types', typeController.types)

module.exports = router;

