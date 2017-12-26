const mongoose = require('mongoose')
const Schema = mongoose.Schema

const valid = require('../utils/validateUtil')

const mstUserSchema = new Schema({
  email: {type: String, unique: true},
  password: String,
  name: {type: String, unique: true},
  created: { type: Date, default: Date() },
  updated: Date,
  visited: Date,
  visitcount: Number,
  isadmin: Boolean,
})

mstUserSchema.path('email').validate((value)=>{
  return valid.validateEmail(value)
})

mstUserSchema.path('name').validate((value)=>{
  return valid.validateName(value)
})

mstUserSchema.index({email: 1})

module.exports = mongoose.model('mstuser', mstUserSchema)
