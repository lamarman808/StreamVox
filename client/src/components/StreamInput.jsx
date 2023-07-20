import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

const StreamInput = () => {
  const blankStreamState = {
    title: '',
    date: '',
    time: '',
    hours: ''
  }

  const [streamState, setStreamState] = useState(blankStreamState)
  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const newStream = await Client.post(
        `${BASE_URL}/schedule/new`,
        streamState
      )
      console.log(newStream)
      navigate('/schedule')
    } catch (err) {
      console.error(err)
    }
  }

  const handleClick = () => {
    console.log('Stream Button Clicked!')
  }

  const handleChange = (event) => {
    setStreamState({ ...streamState, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Schedule a Stream:</h2>
      <input
        type="text"
        id="stream-title"
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
      <button type="submit" onClick={handleClick}>
        SCHEDULE
      </button>
    </form>
  )
}

export default StreamInput
