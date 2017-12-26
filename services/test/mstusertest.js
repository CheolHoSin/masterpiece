const assert = require('assert')
const mstuserDaoService = require('../mstuser')

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

function testsignup(user) {
  return mstuserDaoService.signUp(
    user.email, user.password, user.name,
    user.created, user.visitcount, user.isadmin
  )
}

function equalUser(userA, userB) {
  return (userA.email === userB.email) &&
  (userA.password === userB.password) &&
  (userA.name === userB.name) &&
  (userA.created == userB.created) &&
  (userA.updated == userB.updated) &&
  (userA.visited == userB.visited) &&
  (userA.visitedcount === userB.visitedcount) &&
  (userA.isadmin === userB.isadmin)
}

function equalUserWithoutPswd(userA, userB) {
  return (userA.email === userB.email) &&
  (userA.name === userB.name) &&
  (userA.created == userB.created) &&
  (userA.updated == userB.updated) &&
  (userA.visited == userB.visited) &&
  (userA.visitedcount === userB.visitedcount) &&
  (userA.isadmin === userB.isadmin)
}

function test() {
  describe('UserDaoService', () => {
    describe('#signUp', () => {

      beforeEach(()=>{
        return mstuserDaoService.insertAll(mstusers)
      })

      it('should success when mstusers and inserted result are the same', () => {
        return testsignup(newUser)
      })

      it('should fail when email is invalid', () => {
        const invalidUser = invalidUsers.emailInvalid

        return new Promise((resolve, reject)=>{
          testsignup(invalidUser)
          .then((res)=>{reject(new Error('Email Validator doesn\'t works well'))})
          .catch((err)=>{resolve()})
        })
      })

      it('should fail when name is invalid', () => {
        const invalidUser = invalidUsers.nameInvalid

        return new Promise((resolve, reject)=>{
          testsignup(invalidUser)
          .then((res)=>{reject(new Error('Name Validator doesn\'t works well'))})
          .catch((err)=>{resolve()})
        })
      })

      it('should fail when duplicated user is inserted', () => {
        const insertedUser = mstusers[0]

        return new Promise((resolve, reject) => {
          testsignup(insertedUser)
          .then((res1)=>{reject(new Error('Duplicated User is inserted'))})
          .catch((err)=>{resolve()})
        })
      })

      afterEach(()=>{
        return mstuserDaoService.dropCollection()
      })

    })

    describe('#signIn', ()=> {

      before(()=>{
        return mstuserDaoService.insertAll(mstusers)
      })
      it('should success when it finds user', ()=>{
        const onSignIn = (user, res)=>{
          const p = new Promise((resolve, reject)=>{
            if(equalUserWithoutPswd(user, res)) resolve()
            else reject(new Error('Not Equal User' + user.email))
          })
          return p
        }

        return mstuserDaoService.signIn(mstusers[1].email, mstusers[1].password)
        .then((res)=>onSignIn(mstusers[1], res))
      })

      it('should fail when it doesn\'t find user', ()=>{
        const onSignIn = (res) => {
          const p = new Promise((resolve, reject)=>{
            if(res) reject(new Error('User is found'))
            else resolve()
          })

          return p
        }

        return mstuserDaoService.signIn(notUser.email, notUser.password)
        .then(onSignIn)
      })

      after(()=>{
        return mstuserDaoService.dropCollection()
      })

    })

    describe('#visit', ()=>{

      beforeEach(()=>{
        return mstuserDaoService.insertAll(mstusers)
      })

      it('should return (original_visit+1) when completed', ()=>{
        const loginedUser = mstusers[2]

        const visit = (user) => {
          loginedUser.visited = Date()
          loginedUser.visitcount += 1

          return mstuserDaoService.visit(user._id, loginedUser.visited, loginedUser.visitcount)
        }

        const onVisit = (raw) => {
          const p = new Promise((resolve, reject)=>{
            if(raw.nModified==1) resolve()
            else reject(new Error('Update Failed'))
          })

          return p
        }

        const verify = (user) => {
          const p = new Promise((resolve, reject) => {
            if(equalUserWithoutPswd(user, loginedUser)) resolve()
            else reject(new Error('Visit Failed'))
          })

          return p
        }

        return mstuserDaoService.signIn(loginedUser.email, loginedUser.password)
        .then(visit)
        .then(onVisit)
        .then((res)=>mstuserDaoService.signIn(loginedUser.email, loginedUser.password))
        .then(verify)
      })

      it('should fail when notUser visits', ()=>{
        const onUpdate = (raw) => {
          const p = new Promise((resolve, reject)=>{
            if(raw.nModified>0) reject(new Error('Someone\'s visitcount added'))
            else resolve()
          })

          return p
        }

        return mstuserDaoService.visit('5a407b08353c850ab4dae8fa', Date(), 100)
        .then(onUpdate)
      })

      afterEach(()=>{
        return mstuserDaoService.dropCollection()
      })
    })

    describe('#modifyName', () => {

      beforeEach(()=>{
        return mstuserDaoService.insertAll(mstusers)
      })

      it('should change name when completed', () => {
        const loginedUser = mstusers[0]

        const getId = (res)=>{
          const p = new Promise((resolve, reject) => {
            loginedUser._id = res._id
            loginedUser.name = 'MISHIRO'
            loginedUser.updated = Date()

            resolve(loginedUser)
          })

          return p
        }

        const onModified = (raw) => {
          const p = new Promise((resolve, reject) => {
            if (raw.nModified==1) resolve()
            else reject(new Error('Update Failed'))
          })

          return p
        }

        const verify = (userA, userB) => {
          const p = new Promise((resolve, reject) => {
            if (equalUserWithoutPswd(userA, userB)) resolve()
            else reject(new Error('Not updated Name'))
          })

          return p
        }

        return mstuserDaoService.signIn(loginedUser.email, loginedUser.password)
        .then(getId)
        .then((user) => mstuserDaoService.modifyName(user._id, user.name, user.updated))
        .then(onModified)
        .then((res)=>mstuserDaoService.signIn(loginedUser.email, loginedUser.password))
        .then((user)=>verify(user, loginedUser))
      })

      it('should fail when notUser request to modify name', () => {
        const onUpdate = (raw) => {
          const p = new Promise((resolve, reject) => {
            if (raw.nModified > 0) reject(new Error('Someone\'s name is modified'))
            else resolve()
          })

          return p
        }

        return mstuserDaoService.modifyName('5a407b08353c850ab4dae8fa', 'ERROR!', Date())
        .then(onUpdate)
      })

      afterEach(()=>{
        return mstuserDaoService.dropCollection()
      })
    })

    describe('#modifyPassword', () => {
      beforeEach(()=>{
        return mstuserDaoService.insertAll(mstusers)
      })

      it('should login with changed password when compelted', () => {
        const loginedUser = mstusers[2]
        const newPassword = 'changed#000'
        const updated = Date()

        const onUpdate = (raw) => {
          const p = new Promise((resolve, reject)=>{
            if (raw.nModified==1) {
              loginedUser.password = newPassword
              loginedUser.updated = updated
              resolve(loginedUser)
            } else {
              reject(new Error('Update Failed'))
            }
          })

          return p
        }

        const verify = (userA, userB) => {
          const p = new Promise((resolve, reject) => {
            if (equalUserWithoutPswd(userA, userB)) resolve()
            else reject(new Error('Another user\'s password may be upated'))
          })

          return p
        }

        return mstuserDaoService.modifyPassword(loginedUser.email, loginedUser.password, newPassword, updated)
        .then(onUpdate)
        .then((user)=>mstuserDaoService.signIn(user.email, user.password))
        .then((user)=>verify(user, loginedUser))
      })

      afterEach(()=>{
        return mstuserDaoService.dropCollection()
      })
    })

    describe('#findOneByEmail', () => {
      before(()=>{
        return mstuserDaoService.insertAll(mstusers)
      })

      it('should find the user with email when compeleted', () => {
        const findUser = mstusers[1]

        const verify = (userA, userB) => {
          const p = new Promise((resolve, reject) => {
            if(equalUserWithoutPswd(userA, userB)) resolve()
            else reject('User Not Equal')
          })

          return p
        }

        return mstuserDaoService.findOneByEmail(findUser.email)
        .then((user) => verify(user, findUser))
      })

      it('should returns null it finds notUser', () => {

        const verify = (user)=>{
          const p = new Promise((resolve, reject) => {
            if(user) reject(new Error('Found User'))
            else resolve()
          })

          return p
        }
        return mstuserDaoService.findOneByEmail(notUser.email).then(verify)
      })

      after(()=>{
        return mstuserDaoService.dropCollection()
      })
    })

    describe('#leave', () => {
      beforeEach(()=>{
        return mstuserDaoService.insertAll(mstusers)
      })

      it('should be disable to find the user when deleted', () => {
        const deletedUser = mstusers[0]

        const onDeleted = (status) => {
          const p = new Promise((resolve, reject) => {
            if (status.deletedCount == 1) resolve()
            else reject(new Error('User Not Deleted'))
          })

          return p
        }

        const verify = (user) => {
          const p = new Promise((resolve, reject) => {
            if(user) reject(new Error('Another is Deleted'))
            else resolve()
          })

          return p
        }

        return mstuserDaoService.leave(deletedUser.email, deletedUser.password)
        .then(onDeleted)
        .then(()=>mstuserDaoService.findOneByEmail(deletedUser.email))
        .then(verify)
      })

      it('should fail when deleting notUser', () => {
        const deletedUser = notUser

        const onDeleted = (status) => {
          const p = new Promise((resolve, reject) => {
            if(status.deletedCount > 0) reject(new Error('User Deleted'))
            else resolve()
          })

          return p
        }

        return mstuserDaoService.leave(deletedUser.email, deletedUser.password)
        .then(onDeleted)
      })

      afterEach(()=>{
        return mstuserDaoService.dropCollection()
      })
    })

  })
}

exports.test = test
