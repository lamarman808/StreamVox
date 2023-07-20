import { useState } from 'react'
import axios from 'axios'
import { GetPosts } from '../services/PostServices'

const PostInput = (props) => {
  const blankPostState = {
    body: ''
  }
  const [postState, setPostState] = useState(blankPostState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!postState.body) {
      await axios.post('http://localhost:3001/posts', postState)
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
      <input
        type="text"
        name="post"
        onChange={props.handleChange}
        placeholder="Datum for your thoughts?"
      />
      <button className="post-button" onClick={props.CreatePost}>
        POST
      </button>
    </form>
  )
}

export default PostInput
