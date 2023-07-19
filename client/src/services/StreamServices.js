import Client from './api'

export const GetStreams = async () => {
  try {
    const res = await Client.get('/schedule')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateStream = async () => {
  try {
    const res = await Client.create('/new')
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateStream = async () => {
  try {
    const res = await Client.update('/:stream_id')
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteStream = async () => {
  try {
    const res = await Client.delete('/:stream_id')
    return res.data
  } catch (error) {
    throw error
  }
}
