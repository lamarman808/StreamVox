import { useNavigate } from 'react-router-dom'
import { GetPosts } from '../services/PostServices'
import { useState, useEffect } from 'react'

const Posts = ({ user }) => {
  let navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [postLikesCount, setPostLikes] = useState(0)

  useEffect(() => {
    const handlePosts = async () => {
      const postData = await GetPosts()
      setPosts(postData)
    }
    handlePosts()
  }, [])

  return user ? (
    <div className="grid col-4">
      <header>
        <h1>Post Waterfall</h1>
        <button onClick={() => navigate('/posts/new')}>Say Something!</button>
      </header>
      {posts.map((post) => (
        <div key={post._id} className="post-section">
          {post.body}
          <div>
            <button
              onClick={() =>
                setPostLikes((postLikesCount) => postLikesCount + 1)
              }
              user={user}
            >
              Like {postLikesCount}
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="protected">
      <h3>You pressed the wrong button! Please sign in to proceed!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Posts
