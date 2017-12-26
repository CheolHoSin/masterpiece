// author: uzulove

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
  res.loadHtml('test.html')
}

exports.notLogined = notLogined
exports.goToLoginPage = goToLoginPage
exports.goToMainPage = goToMainPage
exports.test = test
