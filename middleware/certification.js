/**
 * 验证账号，排除freeList和、/fApi开头的接口
 */
const Ret = require('./../common/return')
const ret = new Ret()

// 无需验证接口列表
const freeList = [

]

const certificate = function (req, res, next) {
  console.log('验证')
  next()
}

module.exports = certificate