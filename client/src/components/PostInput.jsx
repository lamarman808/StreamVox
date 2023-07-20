import { useState } from 'react'
import axios from 'axios'
import { GetPosts, CreatePost } from '../services/PostServices'

const PostInput = (props) => {
  const blankPostState = {
    body: ''
  }
  const [postState, setPostState] = useState(blankPostState)

  const handlePostSubmit = async (event) => {
    event.preventDefault()
    if (!postState.body) {
      await axios.post('http://localhost:3001/posts/new', postState)
      console.log(postState)
      setPostState(blankPostState)
      GetPosts()
    }
  }

  const handlePostChange = (event) => {
    setPostState({ ...postState, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handlePostSubmit}>
      <label htmlFor="body">Flex your Vox:</label>
      <input
        type="text"
        name="post"
        onChange={props.handlePostChange}
        placeholder="Datum for your thoughts?"
      />
      <button className="post-button" onClick={props.CreatePost}>
        POST
      </button>
    </form>
  )
}

export default PostInput
