class Ret {
  d = {
    code: 1,
    message: '',
    data: null
  }

  /**
   * 成功返回
   * @param {*} d 
   * @returns {Object}
   */
  success (d){
    this.d.code = 1
    this.d.message = 'success',
    this.d.data = d
    this.log()
    return this.d
  }

  /**
   * 未登录
   */
  noLogin(){
    this.d = {
      code: 0,
      message: '账号未登录',
      data: null
    }
    this.log()
    return this.d
  }

  /**
   * 错误
   * @param {*} err
   */
  error (err){
    this.d = {
      code: 3,
      message: err,
      data: null
    }
    this.log()
    return this.d
  }

  log(){
    console.log('【Return】'+JSON.stringify(this.d))
  }
}

module.exports = Ret