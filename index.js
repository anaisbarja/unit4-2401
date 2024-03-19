// 1. setup
const express = require("express")
const app = express()

app.use(express.json())

const cors = require("cors")
app.use(cors())

const client = require ("./db/client")
client.connect()

// middleware
app.use((req, res, next)=>{
    console.log("you have arrived to middleware")
    next()
})

// get route to "/hi", should res.send("hello")
app.get("/hi", (req, res, next)=>{
    console.log("hello")
    res.send("hello")

})

const apiRouter = require("./api")
app.use("/api", apiRouter)
const port = 8000
app.listen(port, ()=>{
    console.log("Server is up and running :)")
})