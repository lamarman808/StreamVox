import './App.css'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Stream from './components/Stream'
import Following from './components/Following'

function App() {
  const [likesCount, setCount] = useState(0)

  return (
    <main>
      <div>
        <h1>The Beginning</h1>
        <div className="likes-card">
          <button onClick={() => setCount((likesCount) => likesCount + 1)}>
            Likes {likesCount}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
