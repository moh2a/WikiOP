//const  firebase = require("firebase/app");
//const auth = require("firebase/auth");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
var firebaseConfig = {
    apiKey: "AIzaSyBZTAjwO9-76Y-0sgJYxlrKF3J3k3qiuos",
    authDomain: "tshirt-shop-900ac.firebaseapp.com",
    databaseURL: "https://tshirt-shop-900ac.firebaseio.com",
    projectId: "tshirt-shop-900ac",
    storageBucket: "",
    messagingSenderId: "931749864223",
    appId: "1:931749864223:web:4b70ad4687b1063e"
  };
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const Inscription = (request, response) => {
    try {

        let params = request.body;

        /*firebase.auth()
                .createUserWithEmailAndPassword(params.Email, params.Password)
                .then(function(res){*/
                    let query = `INSERT INTO utilisateur
                    (Email, Nom, Prenom, Type, Password)
                    values
                    (
                        '${params.Email}', 
                        '${params.Nom}', 
                        '${params.Prenom}', 
                        '${params.Type}', 
                        '${params.Password}');`; // query database to get all the  Shipping Regions
            
                    // execute query
                    db.query(query, (err, result) => {
                       if (err != null) response.status(500).send({ error: err.message });
            
                       return response.json(true);
                   });
                
                
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

// validate login details and sign in
const Login = (request, response) => {
    try {
        let params = request.body;
        var query = 'SELECT * FROM  utilisateur WHERE Email = ' + mysql.escape(params.Email) ; // query database to get all the  Shipping Regions

                // execute query
                db.query(query, (err, result) => {
                    if (err != null) response.status(500).send({ error: err.message });
                    else if (result.length > 0) {
                        console.log(result[0].Password);
                        if(result[0].Password==params.Password){
                           let token = jwt.sign({ role: result[0].Type },
                           'RANDOM_TOKEN_SECRET',
                           { expiresIn: '24h' }); // Sigining the token
                            response.json({
                                sucess: true,
                                err: null,
                                token,
                                result
                            });  
                            }
                        else{
                        response.status(401).json({
                        sucess: false,
                        token: null,
                        err: 'Username or password is incorrect',
                        result
                        });
                        }
                       
                        
                    }
                    else{
                        response.status(401).json({
                        sucess: false,
                        token: null,
                        err: 'utilisateur introuvable',
                        result
                    });
                    }
                    
                    
                });
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};

/*const Logout = (request, response) => {
    try {
        firebase.auth().signOut().then(res => {
            return response.json(res);
        })
    } catch (error) {
        if (error != null) response.status(500).send({ error: error.message });
    }
};*/

// sign in using firebase authentication
const test = () => {


}

const customer = {
    Inscription,
    Login,
    test
    //Logout
};

module.exports = customer;