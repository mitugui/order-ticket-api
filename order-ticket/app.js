const express = require("express")
const orderRoute = require("./src/routes/order")

const app = express()

app.use('/orders', orderRoute)

const port = 8000

app.listen(port, () => {
    console.log(`Executando a porta ${port}`)
})