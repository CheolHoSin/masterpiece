const mstuserService = require('../mstuser')
const userdummy = require('../../dummies/userdummy')
const testMethods = require('../../utils/testMethods')

function signup(user) {
  return mstuserService.signUp(
    user.email, user.password, user.name,
    user.created, user.visitcount, user.isadmin
  )
}

const equalValidator = testMethods.createValidatorBinary(
  (msg, a, b) => {
    if (a.email != b.email) { msg.err = 'emails are not same'; return false }
    if (a.name != b.name) { msg.err = 'names are not same'; return false }
    if (Date(a.created) != Date(b.created)) { msg.err = 'createds are not same'; return false }
    if (Date(a.updated) != Date(b.updated)) { msg.err = 'updateds are not same'; return false }
    if (Date(a.visited) != Date(b.visited)) { msg.err = 'visiteds are not same'; return false }
    if (a.visitedcount != b.visitedcount) { msg.err = 'visitedcounts are not same'; return false }
    if (a.isAdmin != b.isAdmin) { msg.err = 'isAdmins are not same'; return false }
    msg.err = ''
    msg.res = 'two are same'
    return true
  }
)

function test() {
  describe('MstUser', () => {

    beforeEach(()=>{
      return mstuserService.insertAll(userdummy.getDummies())
    })

    afterEach(()=>{
      return mstuserService.dropCollection()
    })

    describe('#signUp', () => {

      it('should success when mstusers and inserted result are the same', () => {
        const newUser = userdummy.getNew()

        return signup(newUser)
        .then((res) => testMethods.validate(equalValidator, newUser, res))
      })

      it('should fail when email is invalid', () => {
        const invalidUser = userdummy.getInvalid().emailInvalid

        return new Promise((resolve, reject)=>{
          signup(invalidUser)
          .then((res)=>{reject(new Error('Email Validator doesn\'t works well'))})
          .catch((err)=>{resolve()})
        })
      })

      it('should fail when duplicated user is inserted', () => {
        const insertedUser = userdummy.getDummy(0)

        return new Promise((resolve, reject) => {
          signup(insertedUser)
          .then((res1)=>{reject(new Error('Duplicated User is inserted'))})
          .catch((err)=>{resolve()})
        })
      })

    })

    describe('#signIn', ()=> {

      it('should success when it finds user', ()=>{
        const targetUser = userdummy.getDummy(1)

        return mstuserService.signIn(targetUser.email, targetUser.password)
        .then((res) => testMethods.validate(equalValidator, targetUser, res))
      })

      it('should fail when it doesn\'t find user', ()=>{
        const notUser = userdummy.getNot()

        return mstuserService.signIn(notUser.email, notUser.password)
        .then((res) => testMethods.validate(testMethods.notExistValidator, res))
      })

    })

    describe('#visit', ()=>{

      it('should return (original_visit+1) when completed', ()=>{
        const loginedUser = userdummy.getDummy(1)
        loginedUser.visited = Date()
        loginedUser.visitcount += 1

        return mstuserService.visit(loginedUser.email, loginedUser.visited, loginedUser.visitcount)
        .then((raw) => testMethods.validate(testMethods.nModifiedValidator, raw))
        .then(()=>mstuserService.signIn(loginedUser.email, loginedUser.password))
        .then((res) => testMethods.validate(equalValidator, loginedUser, res))
      })

      it('should fail when notUser visits', ()=>{
        const notUser = userdummy.getNot()

        return mstuserService.visit(notUser.email, Date(), 100)
        .then((raw) => testMethods.validate(testMethods.nModifiedFailValidator, raw))
      })
    })

    describe('#modifyName', () => {

      it('should change name when completed', () => {
        const loginedUser = userdummy.getDummy(0)
        loginedUser.name = 'MISHRO'
        loginedUser.updated = Date()

        return mstuserService.modifyName(loginedUser.email, loginedUser.name, loginedUser.updated)
        .then((raw) => testMethods.validate(testMethods.nModifiedValidator, raw))
        .then(()=>mstuserService.signIn(loginedUser.email, loginedUser.password))
        .then((res) => testMethods.validate(equalValidator, loginedUser, res))
      })

      it('should fail when notUser request to modify name', () => {
        const notUser = userdummy.getNot()

        return mstuserService.modifyName(notUser.email, 'ERROR!', Date())
        .then((raw)=> testMethods.validate(testMethods.nModifiedFailValidator, raw))
      })
    })

    describe('#modifyPassword', () => {

      it('should login with changed password when compelted', () => {
        const loginedUser = userdummy.getDummy(2)
        const newPassword = 'changed#000'
        const updated = Date()

        return mstuserService.modifyPassword(loginedUser.email, loginedUser.password, newPassword, updated)
        .then((raw) => testMethods.validate(testMethods.nModifiedValidator, raw))
        .then(()=>mstuserService.signIn(loginedUser.email, newPassword))
        .then((res) => testMethods.validate(equalValidator, loginedUser, res))
      })
    })

    describe('#findOneByEmail', () => {

      it('should find the user with email when compeleted', () => {
        const findUser = userdummy.getDummy(1)

        return mstuserService.findOneByEmail(findUser.email)
        .then((res) => testMethods.validate(equalValidator, findUser, res))
      })

      it('should returns null it finds notUser', () => {
        const notUser = userdummy.getNot()

        return mstuserService.findOneByEmail(notUser.email)
        .then((res) => testMethods.validate(testMethods.notExistValidator, res))
      })
    })

    describe('#leave', () => {

      it('should be disable to find the user when deleted', () => {
        const deletedUser = userdummy.getDummy(0)

        return mstuserService.leave(deletedUser.email, deletedUser.password)
        .then((status) => testMethods.validate(testMethods.deletedValidator, status))
        .then(()=>mstuserService.findOneByEmail(deletedUser.email))
        .then((res) => testMethods.validate(testMethods.notExistValidator, res))
      })

      it('should fail when deleting notUser', () => {
        const deletedUser = userdummy.getNot()

        return mstuserService.leave(deletedUser.email, deletedUser.password)
        .then((status) => testMethods.validate(testMethods.notDeletedValidator, status))
      })
    })

  })
}

exports.test = test
