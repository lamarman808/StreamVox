import Nav from './Nav'
import Following from './Following'
import Followers from './Followers'
import Posts from './Posts'
import Schedule from './Schedule'
import Input from './Input'

const Stream = () => {
  // const [skedge, setSkedge] = useState([])

  // const [input, setInput] = useState('00/00/00; 00:00')

  // const addStream = () => {
  //   let calendar = [...skedge, input]
  //   setSkedge(calendar)
  //   setInput('')
  // }

  // const handleSkedge = (event) => {
  //   setInput(event.target.value)
  // }

  // const [posts, makePost] = useState([])

  // const addPost = (event) => {
  //   makePost(event.target.value)
  // }

  // const removePost = (stream) => {
  //   let timeLine = [...skedge]
  //   timeLine.splice(stream, 1)
  //   setSkedge(timeLine)
  // }

  return (
    <div>
      <header>
        <h1>STREAM FLOW</h1>
      </header>
      <main>
        {/* <Input handleSkedge={handleSkedge} addPost={addStream} input={input} />
        <Schedule schedule={skedge} removePost={removePost} />
        <Posts posts={posts} removePost={removePost} /> */}
      </main>
    </div>
  )
}

export default Stream

// IF statement for input submissions
