const express = require('express');
const router = express.Router();

const controller = require('../Controllers/artisan');

router.get('/:id', controller.getArtisan );

module.exports = router;