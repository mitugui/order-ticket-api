const { Product } = require("../../models/Product.js")

async function getProductById(id) {
    return await Product.findById(id)
}

async function insertProduct(productData) {
    return await Product.create(productData)
}

module.exports = {
    getProductById,
    insertProduct
}