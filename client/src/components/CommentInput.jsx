import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

const CommentInput = () => {
  const blankCommentState = {
    body: ''
  }
  const [commentState, setCommentState] = useState(blankCommentState)
  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('default prevented!!')
    try {
      const newComment = await Client.post(
        `${BASE_URL}/comment/new`,
        commentState
      )
      console.log(newComment)
      navigate('/posts')
    } catch (err) {
      console.error(err)
    }
  }

  //DELETE
  const handleChange = (event) => {
    setCommentState({ ...commentState, [event.target.id]: event.target.value })
  }
  const handleClick = () => {
    console.log('Post Button Clicked!')
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        id="body"
        name="post"
        onChange={handleChange}
        placeholder="Your $0.02"
        value={commentState.body}
      ></textarea>
      <button type="submit" onClick={handleClick}>
        POST
      </button>
    </form>
  )
}

export default CommentInput
