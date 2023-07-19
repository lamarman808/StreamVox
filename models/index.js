const mongoose = require('mongoose')
const userSchema = require('./User')
const postSchema = require('./Post')
const gameSchema = require('./Game')
const commentSchema = require('./Comment')
const scheduleSchema = require('./Schedule')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const Game = mongoose.model('Game', gameSchema)
const Comment = mongoose.model('Comment', commentSchema)
const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = {
  User,
  Post,
  Schedule,
  Game,
  Comment
}
