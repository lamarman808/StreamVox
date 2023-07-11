const Schedule = (props) => {
  return (
    <div className="input">
      <label>Schedule a Stream:</label>
      <input
        type="datetime-local"
        name="schedule"
        onChange={props.handleSubmit}
        value={props.schedule}
      />
      <button className="schedule-button" onClick={props.addStream}>
        Schedule Stream
      </button>
    </div>
  )
}

export default Schedule
