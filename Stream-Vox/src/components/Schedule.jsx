const Schedule = (props) => {
  return (
    <div className="schedule">
      <label>Schedule a Stream:</label>
      {props.schedule.map((date, stream) => (
        <div key={stream}>
          {date}
          <button onClick={() => props.removePost(stream)}>DELETE DATE</button>
        </div>
      ))}
    </div>
  )
}

export default Schedule
