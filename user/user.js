// user handlers

const userModel = require('../models/user')

function getUser(req, res) {
  if (req.params.id != 1) {
    res.sendStatus(404)
    return
  }

  var user = {}
  user['email'] = 'uyio2002@naver.com'
  user['name'] = 'uzulove'
  res.send(user)
}

function createUser(req, res) {
  var email = req.body.email
  var password = req.body.password
  var name = req.body.name

  if(userModel.findEmail(email)) {
    res.sendStatus(404)
    return
  }

  userModel.insert(email, password, name)
  .then((user) => { res.send(user) })
}

function deleteUser(req, res) {
  var email = req.body.email
  var password = req.body.password

  if (password != '12345') {
    res.sendStatus(404)
    return
  }

  res.sendStatus(200)
}

function updateUser(req, res) {
  var email = req.body.email
  var password = req.body.password
  var name = req.body.name

  if(password != '12345') {
    res.sendStatus(404)
    return
  }

  res.sendStatus(200)
}

exports.getUser = getUser
exports.createUser = createUser
exports.deleteUser = deleteUser
exports.updateUser = updateUser
