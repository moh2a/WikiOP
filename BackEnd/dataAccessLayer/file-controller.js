//const  firebase = require("firebase/app");
//const auth = require("firebase/auth");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const multer = require('multer');
const helpers = require('../helpers');
//const helpers = require('./helpers');
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
var upload = multer({ storage: storage });
var storage = multer.diskStorage({
      destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname)
  }
})
const uploadImage = (request, response) => {

    var file;

    /*if(!request.files)
    {
        response.send("File was not found");
        return;
    }
    console.log(request.files);
    file = request.files.FormFieldName;  // here is the field name of the form

    response.send("File Uploaded");*/
    /*if(err) {
      console.log(err);
      return res.status(404).send("a error ocurred");
    }
    response.send(request.files); */
    /*upload.single(request.files.myFile);
    response.send(request.files.myFile);*/
    console.log(request);
    
    //let upload = multer({ dest: 'uploads/', fileFilter: helpers.imageFilter }).single('myFile');
    try {
        
        response.send(request.files);
      }catch(err) {
        response.send(400);
      }
    /*upload(request, response, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any
        const file = request.files;
        if (request.fileValidationError) {
            return response.send(request.fileValidationError);
        }
        else if (!request.files) {
            return response.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return response.send(err);
        }
        else if (err) {
            return response.send(err);
        }
        console.log(file.myFile);
        response.send(file);
    });*/
}
    
 


// validate login details and sign in


const fichier = {
    uploadImage
    //Logout
};

module.exports = fichier;