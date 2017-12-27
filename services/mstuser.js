const MstUser = require('../models/mstuser')

// This function create mstuser and returns promise object: resolve(mstuser)
function signUp(email, password, name, signUpDate, visitcount=1, isadmin=false) {
  const mstuser = new MstUser({
    email: email,
    password: password,
    name: name,
    created: signUpDate,
    updated: signUpDate,
    visited: signUpDate,
    visitcount: visitcount,
    isadmin: isadmin
  })

  return mstuser.save()
}

// This function find mstuser with email and password, and returns promise object: resolve(mstuser)
function signIn(email, password) {
  return MstUser.findOne({email: email, password: password}).select({password: 0})
}

// This function find mstuser with id and modify visitcount and visitdatetime. Then returns promise object: resolve(mstuser)
function visit(id, visited, visitcount) {
  return MstUser.update({_id: id}, {$set: {visited: visited, visitcount: visitcount}})
}

// This function find mstuser with id and modify name and modify updatedatetime. Then returns promise object: resolve(mstuser)
function modifyName(id, name, updated=Date()) {
  return MstUser.update({_id: id}, {$set: {name: name, updated: updated}})
}

// This function find mstuser with email and password, and modify updatedatetime. Then returns promise object: resolve(mstuser)
function modifyPassword(email, password, newPassword, updated=Date()) {
  return MstUser.update({email: email, password: password}, {$set: {password: newPassword, updated: updated}})
}

// This function find mstuser with email
function findOneByEmail(email) {
  return MstUser.findOne({email: email}).select({password: 0})
}

// This function remove mstuser
function leave(email, password) {
  return MstUser.deleteOne({email: email, password: password})
}

// warn: This function remove collection and all documents in it.
function dropCollection() {
  return MstUser.remove()
}

// method for test
function insertAll(users) {
  return MstUser.create(users)
}

exports.signUp = signUp
exports.signIn = signIn
exports.visit = visit
exports.modifyName = modifyName
exports.modifyPassword = modifyPassword
exports.leave = leave
exports.findOneByEmail = findOneByEmail
exports.dropCollection = dropCollection
exports.insertAll = insertAll
