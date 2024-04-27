const express = require("express")
const cors = require("cors")
const orderRoute = require("./src/routes/order")

const app = express()
app.use(express.json())
app.use(cors({ origin: "*" }))

app.use('/orders', orderRoute)

const port = 8000

app.listen(port, () => {
    console.log(`Executando a porta ${port}`)
})