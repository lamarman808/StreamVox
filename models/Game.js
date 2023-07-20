const { Schema } = require('mongoose')

const gameSchema = new Schema({
  title: { type: String, required: true },
  console: { type: String, required: true },
  played: { type: Boolean },
  image: { type: String }
})

module.exports = gameSchema
