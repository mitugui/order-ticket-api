const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors")
const connectToDatabase = require("./src/config/dbConnect.js")
const orderRoute = require("./src/api/routes/order")
const productRoute = require("./src/api/routes/product")

dotenv.config()

async function startServer() {
    const connection = await connectToDatabase()

    connection.on("error", (erro) => {
        console.error("erro de conexao", erro)
    })

    connection.once("open", () => {
        console.log("Conexão com o banco feita com sucesso!")
    })

    const app = express()
    app.use(express.json())
    app.use(cors({ origin: "*" }))

    app.use('/orders', orderRoute)
    app.use('/products', productRoute)

    const port = 8000

    app.listen(port, () => {
        console.log(`Executando a porta ${port}`)
    })
}

startServer()