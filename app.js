const express = require("express");
const morgan = require("morgan")

const app = express()

app.use(morgan("tiny"))

app.use(express.json())
app.get("/", (req, res) =>{
    const pingPong = {ping: "pong"}
    res.status(201).json(pingPong)
})

const giftExchange = require("./routes/gift-exchange");
app.use(`/gift-exchange`, giftExchange)

module.exports = app;

app.use((req, res, next) => {
    next(new NotFoundError("NOT FOUND!", 404))
})

app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message
    
    return res.status(status).json({
        error: {message, status}
    })

})