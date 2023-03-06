const express = require('express');
const router = express.Router()
const { Need } = require('./../../common/tool')
const Ret = require('./../../common/return')
const user = require('./../do/user')
const u = new user()
const ret = new Ret()

/**
 * @api /api/user/login
 */
router.post('/login', async (req, res, next) => {
  const need = new Need(req.body, 'a', 'b', 'c', 'd')
  if(!await need.all()){
    res.send(ret.error('参数缺失！'))
    return
  }
  
})

module.exports = router