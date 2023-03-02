import express from "express";
const app = express()

import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import commentRoutes from './routes/comments.js'
import likeRoutes from './routes/likes.js'

//middlewares
app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/users", postRoutes)
app.use("/api/users", authRoutes)
app.use("/api/users", commentRoutes)
app.use("/api/users", likeRoutes)
app.listen(8800, () => {
    console.log("backend working")
})