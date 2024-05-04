const fs = require("fs")
const path = require("path")

const productsPath = path.join(__dirname, "..", "..", "..", "data", "products.json")
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))

function getProductById(id) {
    return products.find(product => product.id === id)
}

function insertProduct(newProduct) {
    const newProductsList = [...products, newProduct]
    fs.writeFileSync(productsPath, JSON.stringify(newProductsList))
}

module.exports =  {
    getProductById,
    insertProduct
}