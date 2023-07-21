import { useNavigate } from 'react-router-dom'
import { GetStreams } from '../services/StreamServices'
import { useState, useEffect } from 'react'

const Schedule = ({ user }) => {
  let navigate = useNavigate()

  const [streams, setStreams] = useState([])

  useEffect(() => {
    const handleStreams = async () => {
      const streamData = await GetStreams()
      setStreams(streamData)
    }
    handleStreams()
  }, [])

  return user ? (
    <div className="grid col-4">
      <header>
        <h1>Stream Schedule</h1>
        <button onClick={() => navigate('/schedule/new')}>Add Stream</button>
      </header>
      {streams.map((stream) => (
        <div key={stream._id} className="calendar">
          {stream.title}: {stream.date}; {stream.time}; {stream.range}
        </div>
      ))}
    </div>
  ) : (
    <div className="protected">
      <h3>Dag gum! Y'all gon' hafta sign on in to go further!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
    </div>
  )
}

export default Schedule
