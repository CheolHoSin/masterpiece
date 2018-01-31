const mongoose = require('mongoose')
const Schema = mongoose.Schema

const valid = require('../utils/validateUtil')

const mstUserSchema = new Schema({
  email: { type: String, unique: true, match: valid.regex.email() },
  password: { type: String, required: true },
  name: { type: String, unique: true },
  created: { type: Date, default: Date() },
  updated: Date,
  visited: Date,
  visitcount: { type: Number, min: 0 },
  isadmin: Boolean,
})

mstUserSchema.index({email: 1})

module.exports = mongoose.model('mstuser', mstUserSchema)
