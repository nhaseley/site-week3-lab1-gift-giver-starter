const express = require("express");
const morgan = require("morgan")

const app = express()

app.use(morgan("tiny"))

app.use(express.json())
app.get("/", (req, res) =>{
    const pingPong = {ping: "pong"}
    res.status(201).json(pingPong)
})





// const router = express.Router()
const giftExchange = require("./routes/gift-exchange");
app.use(`/gift-exchange`, giftExchange)


module.exports = app;