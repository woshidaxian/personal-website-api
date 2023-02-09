const express = require('express')
const router = express.Router()
const uploadFile = require('./../../common/upload')
const upload = uploadFile.single('file')

router.post('/file', function (req, res, next) {
  upload(req, res, function(err){
    if(err){
      res.send(err.message || err)
    }else{
      res.send('1')
    }
  })
  
  
})

module.exports = router