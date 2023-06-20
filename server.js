const express = require("express")
const app = express()
// const port = process.env.PORT || 3000
const port = 3003

const app1 = require("./app")
app.use("/", app1)
// const router = express.Router();

// app.use(`/gift-exchange`, router)




app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`)
})

// const express = require("express")
// const app = express()


// app.get("/", (req, res) =>{
// res.send("Hello World")
// })

// app.get("/products:id", (req, res) =>{
//     res.send(`Products: ${req.params.id}`)
//     })