// authentication handlers

const userModel = require('../models/user')
const authToken = require('../utils/token')

function login(req, res) {
  var email = req.body.email
  var password = req.body.password

  var user

  const onLogin = (logined) => {
    const p = new Promise((resolve, reject) => {
      user = logined
      if(logined) resolve(logined)
      reject(new Error('Null Pointer Exception'))
    })

    return p
  }

  const signToken = (user) => {
    const p = new Promise((resolve, reject) => {
      authToken.sign({
        _id: user._id,
        email: user.email,
        name: user.name,
      }, (err, token) => {
        if(err) reject(err)
        resolve(token)
      })
    })
    return p
  }

  const onTokenSigned = (token) => {
    res.cookie('token', token, {
      secure: true,
      httpOnly: true
    })
    res.json({user: user, token})
  }

  const onError = (err) => {
    res.status(403).json({
      success: false,
      message: 'User Not Found'
    })
  }

  userModel.findOne(email, password)
  .then(onLogin)
  .then(signToken)
  .then(onTokenSigned)
  .catch(onError)
}

exports.login = login
