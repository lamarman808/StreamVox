const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    body: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = commentSchema
