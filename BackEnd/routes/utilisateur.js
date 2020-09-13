const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    Login,
    Inscription,
    test
    //Logout
} = require('../dataAccessLayer/utilisateur-controller');

//register new user
router.post('/addNewUtilisateur', Inscription);
router.post('/login', Login);
router.post('/test', auth, test);
//get username and password
//router.post('/authenticateLogin', AuthenticateLogin);

// Logout from the system
//router.get('/logout', Logout)

module.exports = router;