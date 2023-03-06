const express = require('express')
const router = express.Router()

const text = require('./test')
const user = require('./user')

router.use('/test', text)
router.use('/user', user)

module.exports = router