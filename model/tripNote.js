const sequelize = require('./sql')
const {DataTypes, Model} = require('sequelize')

class TripNote extends Model{}
TripeNote.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '主键ID'
  },
  areaId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    allowNull: false,
    comment: '关联地点ID'
  },
  userId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    allowNull: false,
    comment: '用户ID'
  },
  images: {
    type: DataTypes.STRING(5000),
    allowNull: false,
    comment: '图册'
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '内容'
  }
},{
  serialize,
  modelName: 'TripNote',
  tableName: 'trip_notes',
})

module.exports = TripNote