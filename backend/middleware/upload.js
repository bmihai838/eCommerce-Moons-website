const multer = require('multer')

const storage = multer.diskStorage({

  filter: function (req, file, cb) {

    cb(null, file.originalname)
  }
})

const upload = multer({
  storage,

  fileFilter: (req, file, cb) => {
    
    if(file.mimetype.startsWith('image')) {
      cb(null, true)
    } else {
      cb(new Error('Not an image! Please upload an image.'), false)
    }
  }
})

module.exports = upload