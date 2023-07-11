import './App.css'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Stream from './components/Stream'
import Following from './components/Following'
import Followers from './components/Followers'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)

  const [likesCount, setCount] = useState(0)

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
