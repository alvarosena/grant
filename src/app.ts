import express from 'express'
import { router } from './routes'

const app = express()
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
  return res.json({ john: 'doe' })
})

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`)
})