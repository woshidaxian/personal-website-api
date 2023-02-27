const sequelize = require('./sql')
const {Model, DataTypes} = require('sequelize')
class Trip extends Model{}
Trip.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '主键ID'
  },
  areaName: {
    type: DataTypes.STRING(20),
    allowNull: false,
    comment: '地点名称'
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
  parentId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    comment: '父级地点ID'
  },
  text: {
    type: DataTypes.STRING(500),
    allowNull: false,
    comment: '景点介绍'
  },
  userId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    allowNull: false,
    comment: '创建用户ID'
  }
},{
  sequelize,
  modelName: 'Trip',
  tableName: 'trips',
})

module.exports = Trip