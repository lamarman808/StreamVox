import { useState } from 'react'
import { GetStreams } from '../services/StreamServices'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StreamInput = (props) => {
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
    if (!streamState.body) {
      await axios.post('http://localhost:3001/schedule', streamState)
      console.log(streamState)
      setStreamState(blankStreamState)
      GetStreams()
      navigate('/shcedule')
    }
  }

  const handleClick = () => {
    console.log('Stream Button Clicked!')
  }

  const handleChange = (event) => {
    setStreamState({ ...streamState, [event.target.id]: event.target.value })
  }

  return (
    <div className="stream-input">
      <label>Schedule a Stream:</label>
      <input
        type="text"
        name="stream-title"
        onChange={handleChange}
        placeholder="Title Your Stream!"
      />
      <input
        type="date"
        name="date"
        onChange={handleChange}
        placeholder="00/00/00"
      />
      <input type="number" name="time" onChange={handleChange} placeholder="" />
      <select
        type="number"
        name="hours"
        onChange={handleChange}
        placeholder="hours?"
      >
        <option value="" disable selected>
          Select Stream Length
        </option>
      </select>
      <button className="stream-button" onClick={handleClick}>
        POST
      </button>
    </div>
  )
}

export default StreamInput
