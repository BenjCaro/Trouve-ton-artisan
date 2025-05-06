const express = require('express');
const router = express.Router();

const controller = require('../Controllers/top');



router.get('/', controller.getTopArtisan);

module.exports = router;