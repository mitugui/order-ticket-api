const { getProductById, insertProduct } = require("../services/product")

async function getProduct(req, res) {
    try {
        const id = req.params.id
        const productFound = await getProductById(id)
        if (!productFound) {
            res.status(404).send("Produto não encontrado.");
        } else {
            res.status(200).json(productFound);
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function postProduct(req, res) {
    try {
        const data = req.body
        const newProduct = await insertProduct(data)

        res.status(201).json({ message: "Produto inserido com sucesso!", newProduct })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = { getProduct, postProduct }