import './App.css'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Stream from './pages/Stream'
import Following from './components/Following'
import Followers from './components/Followers'
import Posts from './components/Posts'
import Schedule from './components/Schedule'
import { Route, Routes } from 'react-router-dom'
import Input from './components/Input'

function App() {
  // const [user, setUser] = useState(null)
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

  console.log(isDate)

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

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="*" element={<Stream />} />
          <Route path="/following" element={<Following />} />
          <Route path="/followers" element={<Followers />} />
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
