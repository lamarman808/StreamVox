import Client from './api'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreatePost = async () => {
  try {
    const res = await Client.create('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePost = async () => {
  try {
    const res = await Client.update('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}
export const DeletePost = async () => {
  try {
    const res = await Client.delete('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}
