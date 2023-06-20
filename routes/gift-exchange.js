const express = require("express")
const router = express.Router()
const giftExchangePerformance = require("../models/gift-exchange")
const Error = require("../utils/errors")

router.post("/pairs", (error, req, res, next) => {
    // if ("names" in req.body){
        // try {
            res.status(200).json(giftExchangePerformance.pairs(req.body.names)) // success status response code
        // } catch {
            // next(new error("No valid request body exists"))
        // }
    // } else {
    // next(new BadRequestError("Bad request: no name key found in body"))

    // }
})

router.post("/traditional", (error, req, res, next) => {
    // if ("names" in req.body){
        
        // try {
            res.status(200).json(giftExchangePerformance.traditional(req.body.names)) // success status response code
        // } catch {
            // next(new error("No valid request body exists"))
        // }
    // } else {
    // next(new BadRequestError("Bad request: no name key found in body"))

    // }
})



module.exports = router

