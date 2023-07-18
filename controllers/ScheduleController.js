const { Schedule } = require('../models')

const GetStreams = async (req, res) => {
  try {
    const streams = await Stream.find({})
    res.send(streams)
  } catch (error) {
    throw error
  }
}

const CreateStream = async (req, res) => {
  try {
    const stream = await Stream.create({ ...req.body })
    res.send(stream)
  } catch (error) {
    throw error
  }
}

const UpdateStream = async (req, res) => {
  try {
    const stream = await Stream.findByIdAndUpdate(
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
    await Stream.deleteOne({ _id: req.params.stream_id })
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
