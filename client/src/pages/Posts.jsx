import { useNavigate } from 'react-router-dom'
import { GetPosts, UpdatePost, DeletePost } from '../services/PostServices'
import Client, { BASE_URL } from '../services/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Posts = ({ user }) => {
  let navigate = useNavigate()
  let { postId } = useParams()

  const [posts, setPosts] = useState([])
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const handlePosts = async () => {
      const postData = await GetPosts()
      setPosts(postData)
    }
    handlePosts()
  }, [])

  const deletePost = async (event) => {
    event.preventDefault()
    try {
      let timeLine = await delete `${BASE_URL}/posts/:_id`
      timeLine.splice(posts, 1)
      setPosts(timeLine)
    } catch (err) {
      console.log(err)
    }
  }

  return user ? (
    <div className="grid col-4">
      <header>
        <h1>Post Waterfall</h1>
        <button onClick={() => navigate('/posts/new')}>Say Something!</button>
      </header>
      {posts.map((post) => (
        <div key={post._id} className="post-section">
          {post.body}
        </div>
      ))}
      <button type="submit" onClick={deletePost}>
        Delete
      </button>
    </div>
  ) : (
    <div className="protected">
      <h3>You pressed the wrong button! Please sign in to proceed!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Posts
