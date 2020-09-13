const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const exjwt = require('express-jwt');
const port = process.env.PORT || 8080; 

// create connection to database
const db_config = {
    host: 'localhost',
    user: 'root', // your database username
    password: '', // your database password
    database: 'onepiece',  // name of db
    multipleStatements: true
}
const jwtMW = exjwt({
    secret: 'keyboard cat 4 ever',
    algorithms: ['RS256']
});

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);                                               
    }    
    /*
        We introduce a delay before attempting to reconnect,
        to avoid a hot loop, and to allow our node script to
        process asynchronous requests in the meantime.
        If you're also serving http, display a 503 error.
    */                                                                            
    global.db = connection;
    console.log(`Connected to database ${db_config.host} >> ${db_config.database}`);    
  });                                                                                   
                                          
  
  /*
    Connection to the MySQL server is usually
    lost due to either server restart, or a
    connnection idle timeout (the wait_timeout
    server variable configures this)
  */
  connection.on('error', function(err) {
    console.log('db error', err);
    handleDisconnect();    
  });
}

handleDisconnect();



// configure middleware
app.set('port', process.env.port || port); // set express to use this port
// app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
// app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
    response.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers");

  next();
});

// import routes

const utilisateurRoutes = require('./routes/utilisateur');
const personnageRoutes = require('./routes/personnage');
const fileRoutes = require('./routes/file');
const theorieRoutes = require('./routes/theorie');

// set routes to api
app.use('/uploads', express.static('uploads'));
app.use('/api/utilisateur', utilisateurRoutes);
app.use('/api/personnages', personnageRoutes);
app.use('/api/file-upload', fileRoutes);
app.use('/api/theorie', theorieRoutes);
// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});