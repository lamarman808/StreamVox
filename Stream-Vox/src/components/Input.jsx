const Input = (props) => {
  // const properInput = ({isDate}) => {
  //   return
  // }
  if (props.isDate) {
    return (
      <div className="input">
        <label>Schedule:</label>
        <input
          type="text"
          name="post"
          onChange={props.handlePost}
          defaultValue="title - 00/00/00; 00:00"
        />
        <button className="stream-button" onClick={props.addStream}>
          POST
        </button>
      </div>
    )
  } else {
    return (
      <div className="input">
        <label>Post:</label>
        <input
          type="text"
          name="post"
          onChange={props.handlePost}
          defaultValue="Datum for your thoughts?"
        />
        <button className="post-button" onClick={props.makePost}>
          POST
        </button>
      </div>
    )
  }
}

export default Input
