// author: uzulove

const Animal = require('./models/animal')

// root router's handlers

function notLogined(req, res) {
  res.status(403).json({
    success: false,
    message: 'Not Logined'
  })
}

function goToLoginPage(req, res) {
  res.loadHtml('login.html')
}

function goToMainPage(req, res) {
  res.loadHtml('test.html')
}

function test(res, res) {
  var animal = new Animal()
  animal.name = 'A'
  animal.age = 35

  var child1 = {}
  child1.name = 'B'
  child1.age = 5
  var child2 = {}
  child2.name = 'C'
  child2.age = 2

  var children = [child1, child2]

  animal.children = children

  animal.save()
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))

  res.loadHtml('test.html')
}

exports.notLogined = notLogined
exports.goToLoginPage = goToLoginPage
exports.goToMainPage = goToMainPage
exports.test = test
