const moment = require('moment');

const log = function (req, res, next) {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}]：【query】${JSON.stringify(req.query)}   【body】${JSON.stringify(req.body)}    【IP】${req.ip}`)
  next()
}

module.exports = log