const express = require("express");
const morgan = require("morgan")

const app = express()

app.use(morgan("tiny"))

app.use(express.json())
app.get("/", (req, res) =>{
    const pingPong = {ping: "pong"}
    res.status(201).json(pingPong)
})



// const router = express.Router();


// const namesArray = require("./gift-exchange");
// // const router = express.Router()

// router.post("/pairs", (req, res) => {
//     res.status(200).json(req.body.names) // success status response code
// })

// router.post("/traditional", (req, res) => {
//     res.status(200).json(req.body.names) // success status response code
// })

// router.post("/users", (req, res) => {
//   // const user = req.body;
//   // const newUser = namesArray;
//   res.status(201).json(namesArray) // success status response code
// })

module.exports = app;

// const router = express.Router();

// const userModel = require("../models/users");
