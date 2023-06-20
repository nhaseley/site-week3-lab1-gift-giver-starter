const express = require("express")
const app = express()
// const port = process.env.PORT || 3000
const port = 3003

const app1 = require("./app")
app.use("/", app1)


app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`)
})