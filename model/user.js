/**
 * @description 用户表
 * @author hwg
 */
const sequelize = require('./sql')
const { Model, DataTypes } = require('sequelize')
class User extends Model {

}

User.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '用户主键ID'
  },
  account: {
    type: DataTypes.STRING(20),
    allowNull: false,
    comment: '用户账号',
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
    comment: '用户密码',
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false,
    comment: '联系方式'
  },
  email: {
    type: DataTypes.STRING(100),
    comment: '用户邮箱'
  },
  birthday: {
    type: DataTypes.DATE,
    comment: '出生日期'
  },
  sex: {
    type: DataTypes.INTEGER(1),
    comment: '性别'
  },
  state: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
    defaultValue: 1,
    comment: '1-正常使用；2-账号锁定'
  },
  userType: {
    type: DataTypes.INTEGER(5),
    defaultValue: 1,
    comment: '用户种类，1-默认普通用户'
  },
  isDel: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    comment: '删除标志'
  },
  latestLogin: {
    type: DataTypes.DATE,
    comment: '最近一次登录时间'
  }

}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
})

module.exports = User