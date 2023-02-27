/**
 * 消息表
 * @description 系统消息、私聊消息
 */
const sequelize = require('./sql');
const {Model, DataTypes} = require('sequelize')
class Message extends Model{}
Message.init({
  id: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: '主键ID'
  },
  fromId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    comment: '发送方ID，NULL-为系统发送'
  },
  toId: {
    type: DataTypes.INTEGER(100).UNSIGNED,
    comment: '接收方ID，NULL-为系统管理员'
  },
  hasRead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: '已读标志'
  },
  message: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    comment: '消息内容'
  }
},{
  sequelize,
  modelName: 'Message',
  tableName: 'messages'
})

module.exports = Message