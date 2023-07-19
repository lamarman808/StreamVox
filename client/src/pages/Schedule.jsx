import { useNavigate } from 'react-router-dom'
import { GetStreams } from '../services/StreamServices'
import { useState, useEffect } from 'react'

const Schedule = ({ user }) => {
  const [streams, setStreams] = useState([])

  useEffect(() => {
    const handlePosts = async () => {
      const streamData = await GetStreams()
      setStreams(streamData)
    }
    handlePosts()
  }, [])

  return user ? (
    <div className="grid col-4">
      <header>
        <h1>Stream Schedule</h1>
      </header>
      {streams.map((stream) => (
        <div key={stream.id} className="calendar">
          {stream.title}: {stream.date}; {stream.time}; {stream.range}
        </div>
      ))}
    </div>
  ) : (
    <div className="protected">
      <h3>Dg gum! Y'all gon' hafta sign on in to go further!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Schedule
