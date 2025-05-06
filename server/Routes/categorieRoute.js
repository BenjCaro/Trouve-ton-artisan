const express = require('express');
const router = express.Router();

const controller = require('../Controllers/categorie');

router.get('/categorie/:slug', controller.getAllArtisanByCategorie);

module.exports = router;