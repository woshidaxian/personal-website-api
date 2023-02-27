/**
 * 收藏表
 */
const sequelize = require('./sql')
const {Model, DataTypes} = require('sequelize')
class Collect extends Model{}
Collect.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '主键ID'
  },
  type: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
    comment: '区分收藏的内容'
  },
  itId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    allowNull: false,
    comment: '收藏内容的ID'
  },
  userId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    allowNull: false,
    comment: '收藏人ID'
  }
},{
  sequelize,
  modelName: 'Collect',
  tableName: 'collects'
})
module.exports = Collect