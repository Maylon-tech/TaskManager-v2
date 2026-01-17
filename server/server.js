import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

//MIDDLEWARE

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//DB CONNECTION

connectDB()

app.get("/", (req, res) => {
    res.send("API route GET working normally...")
})

app.listen(PORT, () => console.log("Server running on port", PORT))