const { Schema } = require('mongoose')

const scheduleSchema = new Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    range: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = scheduleSchema
