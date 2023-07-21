import './App.css'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Nav from './components/Nav'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import Stream from './pages/Stream'
import Posts from './pages/Posts'
import Games from './pages/Games'
// import Comments from './pages/Comments'
import PostInput from './components/PostInput'
import StreamInput from './components/StreamInput'
import GameInput from './components/GameInput'
import CommentInput from './components/CommentInput'
import Schedule from './pages/Schedule'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './services/Auth'

function App() {
  const [user, setUser] = useState(null)
  const [skedge, setSkedge] = useState([])
  const [post, setPost] = useState([])
  const [input, setInput] = useState('')

  const addStream = (event) => {
    let calendar = [...skedge, input]
    setSkedge(calendar)
    setInput('')
  }

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const makePost = (event) => {
    let timeLine = [...post, input]
    setPost(timeLine)
    setInput('')
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setInput(event.target.value)
  }

  const deleteStream = (stream) => {
    let calendar = [...skedge]
    calendar.splice(stream, 1)
    setSkedge(calendar)
  }

  const deletePost = (stream) => {
    let timeLine = [...post]
    timeLine.splice(stream, 1)
    setPost(timeLine)
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      <header>Welcome to Stream Vox! Peep game!</header>
      <br />
      <br />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/stream" element={<Stream user={user} />} />
          <Route path="/posts" element={<Posts user={user} />} />
          <Route path="/posts/new" element={<PostInput user={user} />} />
          <Route path="/game" element={<Games user={user} />} />
          <Route path="/game/new" element={<GameInput user={user} />} />
          <Route path="/comment/new" element={<CommentInput user={user} />} />
          <Route path="/schedule" element={<Schedule user={user} />} />
          <Route path="/schedule/new" element={<StreamInput user={user} />} />
        </Routes>

        <div>
          {/* <PostInput
            handleChange={handleChange}
            addStream={addStream}
            makePost={makePost}
            input={input}
            setInput={setInput}
          /> */}
        </div>
        {/* <Posts posts={post} deletePost={deletePost} /> */}
      </main>
    </div>
  )
}

export default App
