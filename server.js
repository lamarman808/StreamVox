const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRouter = require('./routes/AuthRouter')
const PostRouter = require('./routes/PostRouter')
const GameRouter = require('./routes/GameRouter')
const ScheduleRouter = require('./routes/ScheduleRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')
const { Post } = require('./models')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
app.use('/posts', PostRouter)
app.use('/game', GameRouter)
app.use('/schedule', ScheduleRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
