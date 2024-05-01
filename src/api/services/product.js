const fs = require("fs")
const path = require("path")

const productsPath = path.join(__dirname, "..", "..", "..", "data", "products.json")

function getProductById(id) {
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))
    return products.find(product => product.id === id)
}

module.exports =  {
    getProductById
}