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

export const UpdatePost = async (post_id, data) => {
  try {
    const res = await Client.put(`/posts/${post_id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
export const DeletePost = async (post_id) => {
  try {
    const res = await Client.delete(`/posts/${post_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
