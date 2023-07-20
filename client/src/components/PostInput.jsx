import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

const PostInput = () => {
  const blankPostState = {
    body: ''
  }
  const [postState, setPostState] = useState(blankPostState)
  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('default prevented!!')
    try {
      const newPost = await Client.post(`${BASE_URL}/posts/new`, postState)
      console.log(newPost)
      navigate('/posts')
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (event) => {
    setPostState({ ...postState, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="body">Flex your Vox:</label>
      <input
        type="text"
        id="body"
        name="post"
        onChange={handleChange}
        placeholder="Datum for your thoughts?"
        value={postState.body}
      />
      <button type="submit">POST</button>
    </form>
  )
}

export default PostInput
