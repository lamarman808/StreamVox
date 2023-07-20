import { useState } from 'react'
import axios from 'axios'
import { GetPosts, CreatePost } from '../services/PostServices'

const PostInput = (props) => {
  const blankPostState = {
    body: ''
  }
  const [postState, setPostState] = useState(blankPostState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!postState.body) {
      await axios.post('http://localhost:3001/posts/new', postState)
      console.log(postState)
      setPostState(blankPostState)
      GetPosts()
    }
  }

  const handleChange = (event) => {
    setPostState({ ...postState, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="body">Flex your Vox:</label>
      <textarea
        type="text"
        name="post"
        onChange={handleChange}
        placeholder="Datum for your thoughts?"
      ></textarea>
      <button type="submit" onClick={CreatePost}>
        POST
      </button>
    </form>
  )
}

export default PostInput
