import { useState } from 'react'

const StreamInput = (props) => {
  const [input, setInput] = useState('')

  return (
    <div className="stream-input">
      <label>Schedule:</label>
      <button className="toggle-post" onClick={props.buttonToggle}>
        Post?
      </button>
      <input
        type="text"
        name="stream-title"
        onChange={props.handleChange}
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
