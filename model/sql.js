const CONFIG = require('./../config/base')
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize({
  database: CONFIG.DATABASE_NAME,
  username: CONFIG.DATABASE_USERNAME,
  password: CONFIG.DATABASE_PASSWORD,
  host: CONFIG.DATABASE_URL,
  port: CONFIG.DATABASE_PORT,
  dialect: 'mysql',
  logging: false,
  define: {
    // create_time && update_time
    timestamps: true,
    // delete_time
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    // 把驼峰命名转换为下划线
    underscored: true,
  }
})
sequelize.sync({ force: false, alter: true }).then(e => {
  console.log('数据库同步完成')
}).catch(err => {
  console.log(err)
})
sequelize.authenticate().then(res => {
  console.log('数据库链接成功！！！')
}).catch(err => {
  console.log(err);
  console.log('数据库链接失败')
})

module.exports = sequelize