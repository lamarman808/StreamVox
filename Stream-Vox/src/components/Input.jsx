const Input = (props) => {
  return (
    <div className="input">
      <label>Post/Schedule:</label>
      <input
        type="text"
        name="post"
        onChange={props.handleChange}
        value={props.input}
      />
      <button className="add-button" onClick={props.addPost}>
        POST
      </button>
    </div>
  )
}

export default Input
