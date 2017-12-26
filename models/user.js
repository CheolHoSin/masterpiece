// user dummy data

var users = [{
  _id: 1,
  email: 'uyio2002@naver.com',
  password: '12345',
  name: 'uzulove'
}, {
  _id: 2,
  email: 'uyio2002@gmail.com',
  password: '54321',
  name: 'uyio2002'
}]

var idx = 3

exports.findEmail = (email) => {
  const user = users.find((user) => {
    console.log(user.email + ', ' + email)
    return user.email === email
  })

  if (user) return true
  else return false
}

exports.findOne = (email, password) => {
  const p = new Promise((resolve, reject) => {
    const user = users.find((user) => {
      if (user.email == email && user.password == password) {
        return user
      }
    })

    if(user) resolve(user)
    else reject(new Error('User Not Found'))
  })

  return p
}

exports.insert = (email, password, name) => {
  const p = new Promise((resolve, reject) => {
    const user = {
      _id: idx,
      email: email,
      password: password,
      name: name
    }
    users.push(user)
    idx++

    resolve(user)
  })

  return p
}
