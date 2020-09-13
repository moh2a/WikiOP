const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    recuperation
    //Logout
} = require('../dataAccessLayer/theorie-controller');

//register new user
router.post('/getAllTheories', recuperation);
//get username and password
//router.post('/authenticateLogin', AuthenticateLogin);

// Logout from the system
//router.get('/logout', Logout)

module.exports = router;