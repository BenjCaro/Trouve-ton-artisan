const express = require('express');
const router = express.Router();

const controller = require('../Controllers/categorie');

router.get('/categorie', controller.getAllArtisanByCategorie);

module.exports = router;