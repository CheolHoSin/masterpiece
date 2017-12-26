function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return email && re.test(email.toLowerCase())
}

function validateName(name) {
  return name && (name.length <= 10)
}

function validatePassword(password) {
  const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/
  return password && re.test(password)
}


exports.validateEmail = validateEmail
exports.validateName = validateName
exports.validatePassword = validatePassword
