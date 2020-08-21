
const controller = require('../controllers/index.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.get);

router.post('/', controller.post);

module.exports = router;
    