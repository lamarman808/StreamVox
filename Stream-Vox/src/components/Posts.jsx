const Posts = (props) => {
  return (
    <div className="posts">
      <label>Let us know what's up:</label>
      {props.posts.map((post, stream) => (
        <div key={stream}>
          {post}
          <button onClick={() => props.removePost(stream)}>DELETE</button>
        </div>
      ))}
    </div>
  )
}

export default Posts
