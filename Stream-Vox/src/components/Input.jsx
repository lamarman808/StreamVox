const Input = (props) => {
  return (
    <div className="input">
      <label>Post/Schedule:</label>
      <input
        type="text"
        name="post"
        onChange={props.handleSkedge}
        defaultValue="title - 00/00/00; 00:00"
      />
      <button className="add-button" onClick={props.addStream}>
        POST
      </button>
    </div>
  )
}

export default Input
