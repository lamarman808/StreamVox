const { Schedule } = require('../models')

const GetStreams = async (req, res) => {
  try {
    const streams = await Schedule.find({})
    res.send(streams)
  } catch (error) {
    throw error
  }
}

const CreateStream = async (req, res) => {
  try {
    const stream = await Schedule.create({ ...req.body })
    res.send(stream)
  } catch (error) {
    throw error
  }
}

const UpdateStream = async (req, res) => {
  try {
    const stream = await Schedule.findByIdAndUpdate(
      req.params.stream_id,
      req.body,
      { new: true }
    )
    res.send(stream)
  } catch (error) {
    throw error
  }
}

const DeleteStream = async (req, res) => {
  try {
    await Schedule.deleteOne({ _id: req.params.stream_id })
    res.send({
      msg: 'Schedule Cleared!',
      payload: req.params.stream_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetStreams,
  CreateStream,
  UpdateStream,
  DeleteStream
}
