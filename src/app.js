require('dotenv').config
const express = require('express')
const connectDB = require("./db/db")
const authRoutes = require("./routes/auth.routes")
const postRoutes = require("./routes/Post.routes")
const CookieParser = require("cookie-parser")

connectDB();

const app = express()
app.use(express.json())
app.use(CookieParser())

app.use("/api/auth" , authRoutes)
app.use("/api/posts", postRoutes)

module.exports = app