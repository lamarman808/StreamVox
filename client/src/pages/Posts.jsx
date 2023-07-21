import { useNavigate } from 'react-router-dom'
import { GetPosts, UpdatePost, DeletePost } from '../services/PostServices'
import Client, { BASE_URL } from '../services/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Posts = ({ user }) => {
  let navigate = useNavigate()
  // let { postId } = useParams()

  const [posts, setPosts] = useState([])
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const handlePosts = async () => {
      const postData = await GetPosts()
      setPosts(postData)
    }
    handlePosts()
  }, [])

  const deletePost = async (id) => {
    const timeLine = [...posts]
    timeLine.splice(posts.id, 1)
    setPosts(timeLine)
    // await DeletePost(posts.id)
    // setPosts(posts.filter((posts) => posts._id !== id))
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
      <button onClick={() => deletePost(posts._id)}>Delete</button>
    </div>
  ) : (
    <div className="protected">
      <h3>You pressed the wrong button! Please sign in to proceed!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Posts
