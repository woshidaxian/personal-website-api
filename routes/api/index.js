const express = require('express')
const router = express.Router()

const text = require('./test')

router.use('/test', text)

module.exports = router