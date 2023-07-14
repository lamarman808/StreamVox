const Schedule = (props) => {
  return (
    <div className="schedule">
      <label>Streams:</label>
      {props.schedule.map((skedge, stream) => (
        <div key={stream}>
          {skedge}
          <button onClick={() => props.deleteStream(stream)}>
            DELETE DATE
          </button>
        </div>
      ))}
    </div>
  )
}

export default Schedule
