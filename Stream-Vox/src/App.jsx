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
  const [post, setPost] = useState([])
  const [input, setInput] = useState('')
  const [isDate, toggleFormat] = useState(true)

  // const streamPost = (event) => {
  //   if (event.target.value.includes('/')) {
  //     toggleFormat(true)
  //   } else {
  //     toggleFormat(false)
  //   }
  // }

  const addStream = (event) => {
    if (event.target.value.includes('/')) {
      toggleFormat(true)
    } else {
      toggleFormat(false)
    }
    let calendar = [...skedge, input]
    setSkedge(calendar)
    setInput('00/00/00; 00:00')
  }

  const makePost = (event) => {
    if (event.target.value.includes('/')) {
      toggleFormat(true)
    } else {
      toggleFormat(false)
    }
    let timeLine = [...post, input]
    setPost(timeLine)
    setInput('More to say?')
  }

  const handlePost = (event) => {
    setInput(event.target.value)
  }

  const removePost = (stream) => {
    let calendar = [...skedge]
    calendar.splice(stream, 1)
    setSkedge(calendar)
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

        {isDate ? (
          <div>
            <Input
              isDate={isDate}
              handlePost={handlePost}
              addStream={addStream}
              input={input}
            />
          </div>
        ) : (
          <div>
            <Input handlePost={handlePost} makePost={makePost} input={input} />
          </div>
        )}
        <Schedule schedule={skedge} removePost={removePost} />
        <Posts posts={post} removePost={removePost} />
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
