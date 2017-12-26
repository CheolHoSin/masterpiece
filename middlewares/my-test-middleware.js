const db = require('../database/database')

function test(req, res, next) {
  db.connect()
  db.disconnect()
  next()
}

module.exports = test
