import express from 'express'
import http from 'http'
import { router } from './routes'
import { Server } from 'socket.io'

const app = express()
app.use(express.json())
app.use(router)

const server = http.createServer(app)
export const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

app.get('/', (req, res) => {
  return res.json({ john: 'doe' })
})

io.on('connection', socket => {
  console.log(`Connected: ${socket.id}`)
})

const port = process.env.PORT || 8000
server.listen({port}, () => {
  console.log(`Server running on: http://localhost:${port}`)
})