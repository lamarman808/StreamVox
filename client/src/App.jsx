import './App.css'
import Home from './pages/Home'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import Stream from './pages/Stream'
import Following from './pages/Following'
import Followers from './pages/Followers'
import Posts from './pages/Posts'
import Schedule from './pages/Schedule'
import { Route, Routes } from 'react-router-dom'
import Input from './components/PostInput'
import { CheckSession } from './services/Auth'
import { GetPosts } from './services/PostServices'
import axios from 'axios'

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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/stream" element={<Stream user={user} />} />
          <Route path="/following" element={<Following />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/schedule" element={<Schedule schedule={skedge} />} />
        </Routes>

        <div>
          <Input
            handleChange={handleChange}
            addStream={addStream}
            makePost={makePost}
            input={input}
            setInput={setInput}
          />
        </div>
        <Schedule schedule={skedge} deleteStream={deleteStream} />
        <Posts posts={post} deletePost={deletePost} />
      </main>
    </div>
  )
}

export default App
