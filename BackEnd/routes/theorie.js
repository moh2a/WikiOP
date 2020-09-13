const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
    recuperation,
    getTheorieById
} = require('../dataAccessLayer/theorie-controller');
console.log("la");
router.get('/getAllTheories', recuperation);
router.get('/getTheorieById', getTheorieById);
module.exports = router;