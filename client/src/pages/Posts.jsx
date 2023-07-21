import { useNavigate } from 'react-router-dom'
import { GetPosts, UpdatePost, DeletePost } from '../services/PostServices'
import Client, { BASE_URL } from '../services/api'
import { useState, useEffect } from 'react'

const Posts = ({ user }) => {
  let navigate = useNavigate()

  const newPostState = {
    body: ''
  }
  const [posts, setPosts] = useState([])
  const [postState, setPostState] = useState(newPostState)
  const [isEditing, setIsEditing] = useState(false)
  const [deleting, setDelete] = useState(false)
  useEffect(() => {
    const handlePosts = async () => {
      const postData = await GetPosts()
      setPosts(postData)
    }
    handlePosts()
  }, [isEditing, deleting])

  const deletePost = async (id) => {
    try {
      await DeletePost(id)
      setDelete(!deleting)
    } catch (err) {
      console.log(err)
    }
  }

  const updatePost = async (id) => {
    try {
      console.log(postState)
      await UpdatePost(id, postState)
      setIsEditing(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    setPostState({ ...postState, [event.target.id]: event.target.value })
  }

  return user ? (
    <div className="grid col-4">
      <header>
        <h1>Post Waterfall</h1>
        <button onClick={() => navigate('/posts/new')}>Say Something!</button>
      </header>
      {posts.map((post) => (
        <div key={post._id} className="post-section">
          {!isEditing ? (
            <>{post.body}</>
          ) : (
            <form onSubmit={updatePost}>
              <label htmlFor="body">Redo?:</label>
              <input
                type="text"
                id="body"
                name="post"
                onChange={handleChange}
                placeholder="Datum for your thoughts?"
                value={postState.body}
              />
              <button type="submit" onClick={() => updatePost(post._id)}>
                POST
              </button>
            </form>
          )}
          <div>
            <button
              onClick={() => {
                setIsEditing(true)
                setPostState(post)
              }}
            >
              EDIT
            </button>
            <br /> <br />
            <button onClick={() => deletePost(post._id)}>Delete</button>
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
