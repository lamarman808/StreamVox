const { Schema } = require('mongoose')

const commentSchema = new Schema({
  body: { type: String, required: true },
  image: { type: String }
})

module.exports = commentSchema
