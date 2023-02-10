/**
 * 权限表
 */
const sequelize = require('./sql')
const {Model, DataTypes} = require('sequelize')

class Auth extends Model {}

Auth.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '主键ID'
  },
  type: {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    comment: '类别 1-页面路由 2-按钮'
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
    comment: '权限名'
  },
  level: {
    type: DataTypes.INTEGER(20),
    comment: '层级，页面路由使用'
  },
}, {
  sequelize,
  modelName: 'auth',
  tableName: 'auth',
})

module.exports = Auth