import { useNavigate } from 'react-router-dom'
import { GetGames } from '../services/GameServices'
import { useState, useEffect } from 'react'

const Games = ({ user }) => {
  let navigate = useNavigate()

  const [games, setGames] = useState([])
  const [gameLikeCount, setGameLikes] = useState(0)

  useEffect(() => {
    const handleGames = async () => {
      const gameData = await GetGames()
      setGames(gameData)
    }
    handleGames()
  }, [])

  return user ? (
    <div className="grid col-4">
      <header>
        <h1>Game Data</h1>
        <button onClick={() => navigate('/game/new')}>New Game+</button>
      </header>
      {games.map((game) => (
        <div key={game._id} className="memory-card">
          {game.title} : {game.console}
          <br />
          {game.played}
          <br />
          {game.thoughts}
          <div>
            <button
              onClick={() => setGameLikes((gameLikeCount) => gameLikeCount + 1)}
              user={user}
            >
              Like {gameLikeCount}
            </button>
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

export default Games
