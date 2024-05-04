const { insertProduct } = require("../services/product")

function postProduct(req, res) {
    try {
        const data = req.body

        if (req.body.name) {
            insertProduct(data)
            res.status(201)
            res.send("Produto inserido com sucesso!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = { postProduct }