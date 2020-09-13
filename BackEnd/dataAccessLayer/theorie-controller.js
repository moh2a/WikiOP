//const  firebase = require("firebase/app");
//const auth = require("firebase/auth");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const recuperation = (request, response) => {
    try {
        let params = request.body;
        var query = 'SELECT auteur, id, titre, COUNT(V.id_theorie) AS vote FROM theorie T LEFT JOIN votes  V ON T.id = V.id_theorie'  ; 
        // query database to get all the  Shipping Regions

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
const getTheorieById = (request, response) => {
    try {
        console.log("ici");
        let params = request.body;
        var query = 'SELECT theorie, auteur, id, titre, COUNT(V.id_theorie) AS vote FROM theorie T LEFT JOIN votes  V ON T.id = V.id_theorie where id='+request.query.theorieId  ; 
        // query database to get all the  Shipping Regions
                // execute query
                db.query(query, (err, result) => {
                    if (err != null) response.status(500).send({ error: err.message });
                    else{
                        console.log(result);
                        return response.json(result);
                        
                    }  
                });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};


const theorie = {
    recuperation,
    getTheorieById
};

module.exports = theorie;