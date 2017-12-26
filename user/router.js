// user router

const express = require("express")
const user = require("./user")

const router = express.Router()

// middlewares

// restful apis...
//router.get('/:id', user.getUser)    // get /user/1
router.post('/', user.createUser)   // post /user
router.delete('/', user.deleteUser) // delete /user
router.put('/', user.updateUser)    // update /user

exports.router = router
