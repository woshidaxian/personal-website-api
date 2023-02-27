/**
 * 评论表
 * @columns id, key, userId, replyId, content
 */
const sequelize = require('./sql')
const {Model, DataTypes} = require('sequelize')

class Comment extends Model{}

Comment.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '主键ID'
  },
  key: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    allowNull: false,
    comment: '被评论内容的主键ID，不含被回复'
  },
  userId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    allowNull: false,
    comment: '评论人ID'
  },
  replyId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    comment: '回复评论人ID，可以为空'
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '评论内容'
  }
},{
  sequelize,
  modelName: 'Comment',
  tableName: 'comments',
})

module.exports = Comment