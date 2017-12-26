// logger

function consoleLogger(req, res, next) {
  console.log('requested at ' + Date())
  next()
}

module.exports = consoleLogger
