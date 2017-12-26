const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animalScheme = new Schema({
  name: String,
  age: Number,
  children: [{
    name: String,
    age: Number,
    _id: false
  }],
  date: { type: Date, default: Date()},
  hidden: Boolean
})

module.exports = mongoose.model('animal', animalScheme)
