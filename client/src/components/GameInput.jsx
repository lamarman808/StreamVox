import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

const GameInput = () => {
  const blankGameState = {
    title: '',
    console: '',
    played: '',
    thoughts: ''
  }
  const [gameState, setGameState] = useState(blankGameState)
  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('default prevented!!')
    try {
      const newGame = await Client.post(`${BASE_URL}/game/new`, gameState)
      console.log(newGame)
      navigate('/game')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    setGameState({ ...gameState, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="body">Start New Game: </label>
      <input
        type="text"
        id="title"
        onChange={handleChange}
        placeholder="Game Title"
        value={gameState.title}
      />
      -
      <input
        type="text"
        id="console"
        onChange={handleChange}
        placeholder="Where can it be played?"
        value={gameState.console}
      />
      -
      <input
        type="boolean"
        id="played"
        onChange={handleChange}
        placeholder="Played this one?"
        value={gameState.played}
      />
      -
      <textarea
        type="text"
        id="thoughts"
        onChange={handleChange}
        placeholder="Tell us about it!"
        value={gameState.thoughts}
      ></textarea>
      <br />
      <button className="post-button">POST</button>
    </form>
  )
}

export default GameInput
