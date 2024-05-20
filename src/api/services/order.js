const Order = require("../../models/Order.js")
const { Product } = require("../../models/Product.js")

async function getAllOrders() {
    return await Order.find({})
}

async function insertOrder(newOrder) {
    const foundProducts = await Product.find({ _id: { $in: newOrder.items } })
    
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