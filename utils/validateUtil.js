const regexCreator = {
  email: () => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  password: () => {
    return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/
  }
}

function validateEmail(email) {
  const re = regexCreator.email()
  return email && re.test(email.toLowerCase())
}

function validateName(name) {
  return name && (name.length <= 10)
}

function validatePassword(password) {
  const re = regexCreator.password()
  return password && re.test(password)
}

function validateTitle(title) {
  const test = title.length
  return (test > 0 && test <= 50)
}


exports.validateEmail = validateEmail
exports.validateName = validateName
exports.validatePassword = validatePassword
exports.regex = regexCreator
