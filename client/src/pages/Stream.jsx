import { useNavigate } from 'react-router-dom'
import { GetPosts } from '../services/PostServices'
import { GetStreams } from '../services/StreamServices'
import { useState, useEffect } from 'react'

const Stream = ({ user }) => {
  let navigate = useNavigate()

  const [posts, setPosts] = useState([])
  const [streams, setStreams] = useState([])

  useEffect(() => {
    const handlePosts = async () => {
      const postData = await GetPosts()
      setPosts(postData)
      const streamData = await GetStreams()
      setStreams(streamData)
    }
    handlePosts()
  }, [])

  return user ? (
    <div className="grid col-4">
      <header>
        <button onClick={() => navigate('/schedule/new')}>Add Stream</button>
        <h1>We gaming or talking here?</h1>
        <button onClick={() => navigate('/posts/new')}>Add Post</button>
      </header>
      <h2>Post Waterfall</h2>
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          {post.body.length >= 100 ? (
            <p>{post.body.substring(0, 100)}...</p>
          ) : (
            <p>{post.body}</p>
          )}
          {/* <div>
            <button
              onClick={() =>
                setPostLikes((postLikesCount) => postLikesCount + 1)
              }
            >
              Like {postLikesCount}
            </button>
          </div> */}
        </div>
      ))}
      <br />
      <h2>Scheduled Streams</h2>
      {streams.map((stream) => (
        <div key={stream._id} className="calendar-card">
          {stream.title}: {stream.date}; {stream.time}; {stream.range}
        </div>
      ))}
      {/* <div>
        <button
          onClick={() =>
            setStreamLikes((streamLikesCount) => streamLikesCount + 1)
          }
        >
          Like {streamLikesCount}
        </button>
      </div> */}
    </div>
  ) : (
    <div className="protected">
      <h3>Whoah, there! You'll need to log in to proceed!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Stream
