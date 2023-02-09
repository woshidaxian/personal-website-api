const multer = require('multer')

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb){
      cb(null, './uploads')
    },
    filename: function (req, file, cb){
      cb(null, new Date().getTime()+'_'+file.originalname)
    }
  })
})

module.exports = uploadFile