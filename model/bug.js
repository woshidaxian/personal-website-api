const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sql');

class Bug extends Model{}
Bug.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '主键ID'
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: 'bug标题',
  },
  start: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'bug的产生'
  },
  end: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'bug解决'
  },
  userId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    allowNull: false,
    comment: '创建人ID'
  }
},{
  sequelize,
  modelName: 'bug',
  tableName: 'bugs',
})


module.exports = Bug