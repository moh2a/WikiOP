const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const auth = require('../middleware/auth');
var multer = require('multer'); 
const fileUpload = require('express-fileupload');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
var upload = multer({storage});
const {
    uploadImage
    //Logout
} = require('../dataAccessLayer/file-controller');

//register new user
router.post('/newFile', function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files["myFile"];
  var nom = req.files["myFile"].name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('uploads/'+nom, function(err) {
    if (err)
      return res.status(500).send(err);
  });
});
//get username and password
//router.post('/authenticateLogin', AuthenticateLogin);

// Logout from the system
//router.get('/logout', Logout)

module.exports = router;