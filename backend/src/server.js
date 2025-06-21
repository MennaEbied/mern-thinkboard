import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'

dotenv.config()
const app = express()
const port = process.env.Port || 5001


app.use(express.json()) //get access to req.body
app.use(rateLimiter)
//custom middlleware
/* app.use((req, res, next)=>{
    console.log("We just got a new request")
    next()
}) */

app.use('/api/notes',notesRoutes)

connectDB().then(() => {
    app.listen(port,()=>{
        console.log("server started on http://localhost:",port)
    })
})

