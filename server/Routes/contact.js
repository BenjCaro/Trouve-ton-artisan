const express = require('express');
const router = express.Router();

const controller = require('../Controllers/form');

router.post('/', controller.sendMessage);

module.exports = router;