// authentication router

const express = require("express")
const auth = require('./auth')

const router = express.Router()

// restful apis
router.post('/', auth.login)   // post /login

exports.router = router
