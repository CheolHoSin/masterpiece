const mongoose = require('mongoose')

const mstusers = [
  {
    _id: mongoose.Types.ObjectId('5a716f21a4fe977bbc1f2ecc'),
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
    _id: mongoose.Types.ObjectId('5a716f21a4fe977bbc1f2edc'),
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
    _id: mongoose.Types.ObjectId('5a716f21a4fe977bbc1f2eec'),
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
    _id: mongoose.Types.ObjectId('5a716f21a4fe977bbc1f2efc'),
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
    _id: mongoose.Types.ObjectId('5a716f21a4fe977bbc1f2f0c'),
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
  }
}

exports.mstusers = mstusers.slice()
exports.newUser = Object.assign({}, newUser)
exports.notUser = Object.assign({}, notUser)
exports.invalidUsers = Object.assign({}, invalidUsers)
