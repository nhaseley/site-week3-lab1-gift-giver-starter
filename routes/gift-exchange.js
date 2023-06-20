const express = require("express")
const router = express.Router()
const giftExchangePerformance = require("../models/gift-exchange")

// const namesArray = [    
//     "James", "John", "Jones"
// ]
// module.exports = namesArray


router.post("/pairs", (req, res) => {
    res.status(200).json(giftExchangePerformance.pairs(req.body.names)) // success status response code
})

router.post("/traditional", (req, res) => {
    res.status(200).json(giftExchangePerformance.traditional(req.body.names)) // success status response code
})

// app.use(`/gift-exchange-perform`, giftExchangePerformance)


module.exports = router

