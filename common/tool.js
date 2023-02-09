const qiniu = require('qiniu')
const crypto = require('crypto-js');

/**
 * @description 解除数据嵌套，注意重名
 * @param {Array | Object} data 
 * @param {String} obj 
 */
async function releaseNesting(data, obj) {
  data = JSON.parse(JSON.stringify(data))
  if (data.constructor === Object) {
    await Object.keys(data[obj]).forEach(async item => {
      data[item] = data[obj][item]
    })
    delete data[obj]
    return data
  } else if (data.constructor === Array) {
    for (let i = 0; i < data.length; i++) {
      data[i] = await releaseNesting(data[i], obj)
    }
    return data
  } else {
    return '数据类型错误'
  }
}

/**
 * 获取oss上传凭证
 */
async function getOssKey() {
  const accessKey = 'hEi5QhWAhqDKjiKA3MD39XlFCmS0bibpF3Q6InCe'
  const secretKey = '_4hDQJV9TqHgaovKhphRiLDsZoFcQv6G7DXdGDec'
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  const options = {
    scope: 'hwg-project', // 存储空间
    returnBody: '{"key": "$(key)", "fsize": "$(fsize)", "bucket": "$(bucket)", "mimeType": "$(mimeType)"}'
  }
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  return uploadToken
}

/**
 * 加密处理
 */
class Encryption {
  type = null
  params = { iv: '1234567899876543', salt: null, key: '1234567899876543' }
  /**
   * @description 初始化，赋值加密方法，加密参数
   * @param {String} type
   * @param {Object} args
   */
  constructor(type, args) {
    if (!type) {
      console.log('未设置加密方法！！！')
      return
    }
    if (args) {
      Object.keys(args).forEach(i => {
        this.params[i] = args[i]
      })
    }
    this.type = type
  }

  /**
   * @description 加密
   * @param {String} str
   */
  getCrypto(str) {
    const notDeCryptoTypes = ['MD5', 'SHA1', 'SHA256', 'SHA512', 'RIPEMD160', 'Base64']
    if (notDeCryptoTypes.indexOf(this.type) !== -1) {
      // 不可解密
      return crypto[this.type](str).toString()
    }
    if (this.type == 'AES') {
      let key = crypto.enc.Utf8.parse(this.params.key)
      let iv = crypto.enc.Utf8.parse(this.params.iv)
      return crypto.AES.encrypt(str, key, { iv: iv }).toString()
    }
  }

  /**
   * @description 解密
   * @param {String} str
   */
  deCrypto(str) {
    if (this.type == 'AES') {
      let key = crypto.enc.Utf8.parse(this.params.key)
      let iv = crypto.enc.Utf8.parse(this.params.iv)
      return crypto.AES.decrypt(str, key, { iv: iv }).toString(crypto.enc.Utf8)
    }
  }

}


module.exports = {
  releaseNesting,
  getOssKey,
  Encryption
}