const express = require('express');
const router = express.Router();

const controller = require('../Controllers/top');



router.get('/', controller.topArtisan);

module.exports = router;