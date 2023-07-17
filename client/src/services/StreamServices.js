import Client from './api'

export const GetStream = async () => {
  try {
    const res = await Client.get('/')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GrabPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}
