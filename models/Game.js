const { Schema } = require('mongoose')

const gameSchema = new Schema({
  title: { type: String, required: true },
  console: { type: String, required: true },
  played: { type: String },
  thoughts: { type: String, required: true }
})

module.exports = gameSchema
