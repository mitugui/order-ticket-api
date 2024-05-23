const Order = require("../../models/Order.js")
const { Product } = require("../../models/Product.js")

async function getAllOrders() {
    return await Order.find({})
}

async function insertOrder(newOrder) {
    const foundProducts = await Promise.all(newOrder.items.map(async (item) => {
        const product = await Product.findById(item.product)
        if (!product) {
            throw new Error(`Produto com ID ${item.product} não encontrado.`)
        }
        return { name: product.name, price: product.price, quantity: item.quantity }
    }))

    const completeOrder = new Order({
        clientName: newOrder.clientName,
        items: foundProducts
    })

    return await completeOrder.save()
}

async function deleteOrderByID(id) {
    await Order.findByIdAndDelete(id)
}

module.exports = {
    getAllOrders,
    insertOrder,
    deleteOrderByID
}