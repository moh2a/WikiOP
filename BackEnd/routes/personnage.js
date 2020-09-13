const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    recuperation,
    getPersonnageById,
    Ajouter
} = require('../dataAccessLayer/personnage-controller');


console.log("perso.js");
router.post('/new', Ajouter);
router.get('/getAllPersonnages', recuperation);
router.get('/getPersonnageById', getPersonnageById);
module.exports = router;