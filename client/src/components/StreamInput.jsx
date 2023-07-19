import { useState } from 'react'
import { GetStreams } from '../services/StreamServices'

const StreamInput = (props) => {
  const blankStreamState = {
    title: '',
    date: '',
    time: '',
    hours: ''
  }

  const [streamState, setStreamState] = useState(blankStreamState)

  const handleStreamSubmit = async (event) => {
    event.preventDefault()
    if (!streamState.body) {
      await axios.post('http://localhost:3001/posts', streamState)
      console.log(streamState)
      setStreamState(blankStreamState)
      GetStreams()
    }
  }

  const handleStreamChange = (event) => {
    setPostState({ ...streamState, [event.target.id]: event.target.value })
  }

  return (
    <div className="stream-input">
      <label>Schedule:</label>
      <input
        type="text"
        name="stream-title"
        onChange={props.handleStreamChange}
        placeholder="Title Your Stream!"
      />
      <input
        type="datetime-local"
        name="stream"
        onChange={props.handleChange}
        placeholder="title - 00/00/00; 00:00"
      />
      <button className="stream-button" onClick={props.addStream}>
        POST
      </button>
    </div>
  )
}

export default StreamInput
