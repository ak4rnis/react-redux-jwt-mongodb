const express = require("express");
const app = express()
const cors = require("cors")
const todos = require("./routes/todos");
const signUp = require("./routes/signUp")
const signIn = require("./routes/signIn")

const mongoose = require("mongoose")

require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use("/api/todos", todos)
app.use("/api/signup", signUp)
app.use("/api/signin", signIn)

app.get("/", (req, res) => {
    res.send("Welcome to our todos api")
})

const connection_string = "mongodb+srv://akarnis:slenderman500@react-redux-mongo-jwt.tc6ca.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("server running on port ", port)
})

mongoose.connect(connection_string, {
})
    .then(() => console.log("MongoDB connection established..."))
    .catch((error) => console.error("MongoDB connection failed:", error.message))

