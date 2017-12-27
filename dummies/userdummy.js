const mstusers = [
  {
    email: 'uyio2002@naver.com',
    password: 'test#1111',
    name: 'uzulove',
    created: Date(2017, 12, 24, 11, 20, 25, 0),
    visited: Date(2017, 12, 24, 11, 20, 25, 0),
    updated: Date(2017, 12, 24, 11, 20, 25, 0),
    visitcount: 3,
    isadmin: true
  },
  {
    email: 'uyio2002@gmail.com',
    password: 'test#2222',
    name: 'whiteball',
    created: Date(2017, 11, 4, 8, 15, 22, 0),
    visited: Date(2017, 11, 4, 8, 15, 22, 0),
    updated: Date(2017, 11, 4, 8, 15, 22, 0),
    visitcount: 5,
    isadmin: false
  },
  {
    email: 'sch1992@aster.com',
    password: 'test#3333',
    name: 'kage',
    created: Date(2014, 1, 6, 11, 19, 23, 0),
    visited: Date(2014, 1, 6, 11, 19, 23, 0),
    updated: Date(2014, 1, 6, 11, 19, 23, 0),
    visitcount: 102,
    isadmin: false
  },
  {
    email: 'testor@marioworld.com',
    password: 'test#4444',
    name: 'mario',
    created: Date(2002, 3, 9, 12, 15, 18, 0),
    visited: Date(2002, 3, 9, 12, 15, 18, 0),
    updated: Date(2002, 3, 9, 12, 15, 18, 0),
    visitcount: 10,
    isadmin: false
  },
  {
    email: 'huwahuwa@mishiro.com',
    password: 'test#5555',
    name: 'kozue',
    created: Date(2011, 8, 17, 16, 7, 20, 0),
    visited: Date(2011, 8, 17, 16, 7, 20, 0),
    updated: Date(2011, 8, 17, 16, 7, 20, 0),
    visitcount: 1,
    isadmin: false
  }
]

const newUser = {
  email: 'cool@mishiro.com',
  password: 'test#6666',
  name: 'tachibana',
  created: Date(2017, 9, 22, 9, 16, 23, 0),
  visited: Date(2017, 9, 22, 9, 16, 23, 0),
  updated: Date(2017, 9, 22, 9, 16, 23, 0),
  visitcount: 5,
  isadmin: false
}

const notUser = {
  email: 'hello@world.com',
  password: 'foo',
  name: 'bar',
  created: Date(2017, 12, 24, 11, 20, 25, 0),
  visited: Date(2017, 12, 24, 11, 20, 25, 0),
  updated: Date(2017, 12, 24, 11, 20, 25, 0),
  visitcount: 13,
  isadmin: false
}

const invalidUsers = {
  emailInvalid: {
    email: '@error',
    password: '12345',
    name: 'emailError',
    created: Date(2017, 11, 4, 8, 15, 22, 0),
    visited: Date(2017, 11, 4, 8, 15, 22, 0),
    updated: Date(2017, 11, 4, 8, 15, 22, 0),
    visitcount: 5,
    isadmin: false
  },
  nameInvalid: {
    email: 'test1@naver.com',
    password: '12345',
    name: 'THISISNOTINVALIDNAME!!!!!!',
    created: Date(2017, 11, 4, 8, 15, 22, 0),
    visited: Date(2017, 11, 4, 8, 15, 22, 0),
    updated: Date(2017, 11, 4, 8, 15, 22, 0),
    visitcount: 5,
    isadmin: false
  }
}

exports.mstusers = mstusers
exports.newUser = newUser
exports.notUser = notUser
exports.invalidUsers = invalidUsers