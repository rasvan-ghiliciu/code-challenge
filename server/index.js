import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/index.js'


dotenv.config()
const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)



app.listen(port, () => console.log(`Server started on port ${port}`))
