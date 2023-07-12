import './App.css'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Stream from './components/Stream'
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
  const [input, setInput] = useState('00/00/00; 00:00')

  const addStream = () => {
    let calendar = [...skedge, input]
    setSkedge(calendar)
    setInput('')
  }

  const handleSkedge = (event) => {
    setInput(event.target.value)
  }

  const removePost = (stream) => {
    let timeLine = [...skedge]
    timeLine.splice(stream, 1)
    setSkedge(timeLine)
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

        <Input handleSkedge={handleSkedge} addPost={addStream} input={input} />
        <Schedule schedule={skedge} removePost={removePost} />
        {/* <Posts posts={posts} removePost={removePost} /> */}
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
