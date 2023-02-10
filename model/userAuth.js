/**
 * 用户权限组表
 */
const sequelize = require('./sql')
const {Model, DataTypes} = require('sequelize')

class UserAuth extends Model{}

UserAuth.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '用户主键ID'
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
    comment: '权限组名称'
  },
  auth: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '权限ID组'
  },
  userId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    allowNull: false,
    comment: '创建人ID'
  },
  isDel: {
    type: DataTypes.BOOLEAN,
    comment: '删除标志'
  },
},{
  sequelize, 
  modelName: 'UserAuth',
  tableName: 'user_auth'
})

module.exports = UserAuth