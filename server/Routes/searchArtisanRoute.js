const express = require('express');
const router = express.Router();

const controller = require('../Controllers/search');

router.get('/', controller.searchArtisanByName );

module.exports = router;





