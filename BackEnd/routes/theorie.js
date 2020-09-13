const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
    recuperation
} = require('../dataAccessLayer/theorie-controller');

router.get('/getAllTheories', recuperation);

module.exports = router;