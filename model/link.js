/**
 * 链接表
 */

const sequelize = require('./sql')
const { Model, DataTypes } = require('sequelize')

class Link extends Model {}

Link.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '主键ID'
  },
  name: {
    type: DataTypes.STRING(10),
    allowNull: false,
    comment: '链接名称'
  },
  url: {
    type: DataTypes.STRING(100),
    allowNull: false,
    comment: '链接URL'
  },
  icon: {
    type: DataTypes.TEXT,
    comment: '目标链接网站的icon'
  },
  account: {
    type: DataTypes.STRING(50),
    comment: '登录账号',
  },
  password: {
    type: DataTypes.STRING(500),
    comment: '登录密码',
  },
  type: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
    defaultValue: 1,
    comment: '链接归属类型，1-默认类型'
  },
  userId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    comment: '链接归属用户ID'
  },
  isTop: {
    type: DataTypes.BOOLEAN,
    comment: '是否置顶'
  },
  isDel: {
    type: DataTypes.BOOLEAN,
    comment: '删除标志'
  },
},{
  sequelize,
  modelName: 'Link',
  tableName: 'links',
})

module.exports = Link