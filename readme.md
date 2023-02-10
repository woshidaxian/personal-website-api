# personal-website-api
自己网站的一些api

## Database
- create database some-data  
- input database's info in '/config/base.js'

## Project setup
```
npm install
```

## Project run
```
npm run start
```

## Technology selection
- express
- mysql
- sequelize
- node

## Project structure
- bin 项目启动文件
- common 通用方法归档在此
- config 项目配置文件
- middleware 中间件
- model 数据库模型
- public 公用文件，可暴露后通过路径访问
- routes 接口核心代码
- uploads 自动会生成，上传文件存储路径
- views 没用到
- app.js 程序主入口