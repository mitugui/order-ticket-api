const fs = require("fs")

function getProductById(id) {
    const products = JSON.parse(fs.readFileSync("products.json"))
    return products.find(product => product.id === id)
}

module.exports =  {
    getProductById
}