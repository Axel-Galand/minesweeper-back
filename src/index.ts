import cors from 'cors'
import express from 'express'
import GameLogic from "./gameLogic"

const app = express()
app.use(express.json())
app.use(cors())
const gl = new GameLogic("bite");
app.get('/', (req, res) => res.send(gl.greet()))

app.listen(8080, () => console.log('Server listening on http://localhost:8080'))

