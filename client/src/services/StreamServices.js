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

export const UpdateStream = async (stream_id, data) => {
  try {
    const res = await Client.update(`/schedule/${stream_id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteStream = async (stream_id) => {
  try {
    const res = await Client.delete(`/schedule/${stream_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
