const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    body: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = postSchema
