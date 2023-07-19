import { useState } from 'react'
const Input = (props) => {
  if (props.isDate) {
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
  } else {
    return (
      <div className="post-input">
        <label>Post:</label>
        <button className="toggle-stream" onClick={props.buttonToggle}>
          Stream?
        </button>
        <input
          type="text"
          name="post"
          onChange={props.handleChange}
          placeholder="Datum for your thoughts?"
        />
        <button className="post-button" onClick={props.makePost}>
          POST
        </button>
      </div>
    )
  }
}

export default Input
