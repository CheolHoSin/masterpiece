// server start method and app settings

const http = require('http')
const https = require('https')
const express = require('express')
const app = express()
const router = require('./router')
const database = require('./database/database')

const serverConfigs = require('./settings/server_configs')
const dbConfigs = require('./settings/db_configs')

const fs = require('fs')

const options = {
  key: fs.readFileSync('./settings/com.key'),
  cert: fs.readFileSync('./settings/com.crt')
}

function start() {
  app.use('/static', express.static('public'));
  app.use('/', router.router)

  // connect to database
  database.connect(dbConfigs, {
    onConnected: ()=>console.log('database connected at ' + Date()),
    onDisconnected: ()=>console.log('database disconnected at ' + Date()),
    onError: (err)=>console.log(err)
  })

//  app.listen(3000)
  http.createServer(app).listen(serverConfigs.httpPort)
  https.createServer(options, app).listen(serverConfigs.httpsPort)
}

exports.start = start
