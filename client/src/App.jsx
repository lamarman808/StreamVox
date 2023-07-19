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
import Input from './components/Input'
import { CheckSession } from './services/Auth'

function App() {
  const [user, setUser] = useState(null)
  const [likesCount, setCount] = useState(0)

  const [skedge, setSkedge] = useState([])
  const [post, setPost] = useState([])
  const [input, setInput] = useState('')
  const [isDate, setDate] = useState(true)

  const addStream = (event) => {
    console.log(input)
    if (event.target.value.includes('/')) {
      setDate(true)
    } else {
      setDate(false)
      setInput('')
    }
    let calendar = [...skedge, input]
    setSkedge(calendar)
    setInput('')
  }

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const makePost = (event) => {
    if (event.target.value.includes('/')) {
      setDate(true)
      setInput('')
    } else {
      setDate(false)
    }
    let timeLine = [...post, input]
    setPost(timeLine)
    setInput('')
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setInput(event.target.value)
  }

  const buttonToggle = () => {
    setDate(!isDate)
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
            isDate={isDate}
            handleChange={handleChange}
            addStream={addStream}
            makePost={makePost}
            input={input}
            buttonToggle={buttonToggle}
          />
        </div>
        <Schedule schedule={skedge} deleteStream={deleteStream} />
        <Posts posts={post} deletePost={deletePost} />
      </main>
      <div>
        <h1>The Like Button!</h1>
        <div className="likes-card">
          <button onClick={() => setCount((likesCount) => likesCount + 1)}>
            Likes {likesCount}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
