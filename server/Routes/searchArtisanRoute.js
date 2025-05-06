const express = require('express');
const router = express.Router();

const controller = require('../Controllers/search');

router.get('/:nom', controller.getArtisan );

module.exports = router;