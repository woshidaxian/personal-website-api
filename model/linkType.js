/**
 * 链接类型表
 */
const sequelize = require('./sql');
const {Model, DataTypes} = require('sequelize');

class LinkType extends Model {};

LinkType.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '主键ID'
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
    comment: '类型名称'
  },
  userId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    comment: '创建者用户ID'
  },
  orderNum: {
    type: DataTypes.INTEGER(10),
    defaultValue: 1,
    comment: '排序'
  }
},{
  sequelize,
  modelName: 'LinkType',
  tableName: 'link_types',
})


module.exports = LinkType;