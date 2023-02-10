const express = require('express')
const { Encryption } = require('../../common/tool')
const router = express.Router()
const uploadFile = require('./../../common/upload')
const upload = uploadFile.single('file')
const crypto = new Encryption('DES', { iv: '0000111100001111', key: '0000111100001111' })
router.post('/file', function (req, res, next) {
  upload(req, res, function(err){
    if(err){
      res.send(err.message || err)
    }else{
      res.send('1')
    }
  })
})

router.get('/encrypt', function (req, res, next){
  let password = req.query.password
  res.send(crypto.getCrypto(password))
})
router.post('/decrypt', function (req, res, next) {
  let password = req.body.password
  console.log(password);
  res.send(crypto.deCrypto(password))
})

module.exports = router