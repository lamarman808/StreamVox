const mongoose = require('mongoose')
const userSchema = require('./User')
const postSchema = require('./Post')
const scheduleSchema = require('./Schedule')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const Schedule = mongoose.model('Post', scheduleSchema)

module.exports = {
  User,
  Post,
  Schedule
}
