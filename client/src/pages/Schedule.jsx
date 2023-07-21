import { useNavigate } from 'react-router-dom'
import {
  GetStreams,
  UpdateStream,
  DeleteStream
} from '../services/StreamServices'
import { useState, useEffect } from 'react'

const Schedule = ({ user }) => {
  let navigate = useNavigate()

  const newStreamState = {
    title: '',
    date: '',
    time: '',
    hours: ''
  }

  const [streams, setStreams] = useState([])
  const [streamState, setStreamState] = useState(newStreamState)
  const [isEditing, setIsEditing] = useState(false)
  const [deleting, setDelete] = useState(false)

  useEffect(() => {
    const handleStreams = async () => {
      const streamData = await GetStreams()
      setStreams(streamData)
    }
    handleStreams()
  }, [isEditing, deleting])

  const deleteStream = async (id) => {
    try {
      await DeleteStream(id)
      setDelete(!deleting)
    } catch (err) {
      console.log(err)
    }
  }

  const updateStream = async (id) => {
    try {
      console.log(streamState)
      await UpdateStream(id, streamState)
      setIsEditing(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    setStreamState({ ...streamState, [event.target.id]: event.target.value })
  }

  return user ? (
    <div className="grid col-4">
      <header>
        <h1>Stream Schedule</h1>
        <button onClick={() => navigate('/schedule/new')}>
          Schedule Stream
        </button>
      </header>
      {streams.map((stream) => (
        <div key={stream._id} className="calendar">
          {!isEditing ? (
            <>
              {stream.title}: {stream.date}; {stream.time}; {stream.range}
            </>
          ) : (
            <form onSubmit={updateStream}>
              <h2> Adjust Schedule: </h2>
              <input
                type="text"
                id="title"
                onChange={handleChange}
                placeholder="Title Your Stream!"
                defaultValue={streamState.title}
              />
              -
              <input
                type="date"
                id="date"
                onChange={handleChange}
                placeholder="00/00/00"
                value={streamState.date}
              />
              -
              <input
                type="text"
                id="time"
                onChange={handleChange}
                placeholder="0:00"
                value={streamState.time}
              />
              -
              <input
                type="text"
                id="hours"
                onChange={handleChange}
                placeholder="Add Stream Length"
                defaultValue={streamState.hours}
              />
              <br />
              <button type="submit">SCHEDULE</button>
              <br />
            </form>
          )}
          {/* Buttons Non-functional. Will Fix Later. Thanks for reading */}
          {/* <div>
            <br />
            <button
              onClick={() => {
                setIsEditing(true)
                setStreamState(stream)
              }}
            >
              Update
            </button>
            <br /> <br />
            <button onClick={() => deleteStream(stream._id)}>Delete</button>
          </div> */}
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
