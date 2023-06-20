const express = require("express")
const router = express.Router()
// const namesArray = [    
//     "James", "John", "Jones"
// ]
// module.exports = namesArray


router.post("/pairs", (req, res) => {
    res.status(200).json(req.body.names) // success status response code
})

router.post("/traditional", (req, res) => {
    res.status(200).json(req.body.names) // success status response code
})

module.exports = router

