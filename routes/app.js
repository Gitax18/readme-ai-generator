const express = require('express');
const path = require('path');
const multer = require('multer');

// Storage Engine
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
       return cb(null, 'uploads');
    },
    filename: function (req, file, cb)  {
       return cb(null, `${Date.now()}#${file.originalname}`)
    }
  })
  
const upload = multer({ storage })

const appController = require('../controllers/app');

const router = express.Router();

router.get('/', appController.getApp);

router.post('/output', upload.single('code'), appController.postApp)

module.exports = router;