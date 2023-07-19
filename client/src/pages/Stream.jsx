import { useNavigate } from 'react-router-dom'
import { GetPosts } from '../services/PostServices'
import { GetStreams } from '../services/StreamServices'
import { useState, useEffect } from 'react'

const Stream = ({ user }) => {
  let navigate = useNavigate()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const handlePosts = async () => {
      const data = await GetPosts()
      setPosts(data)
    }
    handlePosts()
  }, [])

  return user ? (
    <div className="grid col-4">
      <header>
        <h1>We gaming or talking here?</h1>
      </header>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <div>
            <img src={post.image} alt="post" />
          </div>
          {post.body.length >= 100 ? (
            <p>{post.body.substring(0, 100)}...</p>
          ) : (
            <p>{post.body}</p>
          )}
        </div>
      ))}
      {schedule.map((stream) => (
        <div className="calendar-card" key={stream.id}>
          {stream.title}: {stream.date}; {stream.time}; {stream.range}
        </div>
      ))}
    </div>
  ) : (
    <div className="protected">
      <h3>Whoah, there! You'll need to log in to proceed!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Stream
