/**
 * 图库资源表
 */
const sequelize = require('./sql')
const {Model, DataTypes} = require('sequelize')

class Photo extends Model{}
Photo.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '主键ID'
  },
  type: {
    type: DataTypes.INTEGER(1).UNSIGNED,
    allowNull: false,
    comment: '1-图片, 2-视频, 3-音频, 4-全景图'
  },
  url: {
    type: DataTypes.STRING(200),
    allowNull: false,
    comment: '资源地址'
  },
  longitude: {
    type: DataTypes.FLOAT(20),
    allowNull: false,
    comment: '经度'
  },
  latitude: {
    type: DataTypes.FLOAT(20),
    allowNull: false,
    comment: '纬度'
  },
  text: {
    type: DataTypes.STRING(200),
    comment: '位置信息、相机信息-文字描述'
  }
},{
  sequelize,
  modelName: 'Photo',
  tableName: 'photoes',
})

module.exports = Photo