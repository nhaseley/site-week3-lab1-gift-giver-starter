const express = require("express")
const router = express.Router()
const giftExchangePerformance = require("../models/gift-exchange")

router.post("/pairs", (req, res) => {
    res.status(200).json(giftExchangePerformance.pairs(req.body.names)) // success status response code
})

router.post("/traditional", (req, res) => {
    res.status(200).json(giftExchangePerformance.traditional(req.body.names)) // success status response code
})



module.exports = router

