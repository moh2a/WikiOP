//const  firebase = require("firebase/app");
//const auth = require("firebase/auth");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const recuperation = (request, response) => {
    try {
        let params = request.body;
        var query = 'SELECT * FROM  personnage'  ; // query database to get all the  Shipping Regions

                // execute query
                db.query(query, (err, result) => {
                    if (err != null) response.status(500).send({ error: err.message });
                    else{
                        return response.json(result);
                        
                    }
                    
                    
                });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};
const getPersonnageById = (request, response) => {
    try {
        let params = request.body;
        var query = 'SELECT * FROM  personnage where id='+request.query.personnageId  ; // query database to get all the  Shipping Regions

                // execute query
                db.query(query, (err, result) => {
                    if (err != null) response.status(500).send({ error: err.message });
                    else{
                        return response.json(result);
                        
                    }
                    
                    
                });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};
const Ajouter = (request, response) => {
    try {
        let params = request.body;
        
        var query = 'INSERT into personnage (Nom, Prenom, Age, Type, Fruit, Description, Introduction, Photo, Taille, Poids, Equipage)Values('+
         mysql.escape(params.Nom)+','+
         mysql.escape(params.Prenom)+','+
         mysql.escape(params.Age)+','+
         mysql.escape(params.Type)+','+
         mysql.escape(params.Fruit)+','+
         mysql.escape(params.Description)+','+
         mysql.escape(params.Introduction)+','+
         mysql.escape(params.Photo)+','+
         mysql.escape(params.Taille)+','+
         mysql.escape(params.Poids)+','+
         mysql.escape(params.Equipage)+')'  ; // query database to get all the  Shipping Regions

                // execute query
                db.query(query, (err, result) => {
                    if (err != null) response.status(500).send({ error: err.message });
                    else{
                        console.log("apre");
                        console.log(result);
                        return response.json(result);
                        
                    }
                    
                    
                });
                
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

const perso = {
    recuperation,
    getPersonnageById,
    Ajouter
    //Logout
};

module.exports = perso;