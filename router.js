// root router

const express = require('express')

// routers
const rootRouter = express.Router()
const userRouter = require('./user/router')
const authRouter = require('./auth/router')

// middlewares
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const tokenParser = require('./middlewares/token-parser')
const simpleHtml = require('./middlewares/simple-html')
const mytest = require('./middlewares/my-test-middleware')
const logger = require('./middlewares/logger')

// handlers
const root = require('./root')

// others
const serverConfigs = require('./settings/server_configs')

// add middlewares for this router and handlers
rootRouter.use(bodyParser.urlencoded({ extended: true }))         // body parser
rootRouter.use(cookieParser())                                    // cookie parser
rootRouter.use('/apis', tokenParser(root.notLogined))             // jwt token verifier
rootRouter.use('/', simpleHtml({ root: serverConfigs.viewPath}))  // simpleHtml
// rootRouter.use('/', mytest)                                       // test module
rootRouter.use('/', logger)                                       // logger

// request handlers for this router
rootRouter.get('/', tokenParser(root.goToLoginPage))
rootRouter.get('/', root.goToMainPage)
rootRouter.get('/test', root.test)

// request handlers for child routers
rootRouter.use('/apis/user', userRouter.router)
rootRouter.use('/login', authRouter.router)

exports.router = rootRouter
