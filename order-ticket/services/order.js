const fs = require("fs")

const orders = JSON.parse(fs.readFileSync("orders.json"))

function getAllOrders() {
    return orders
}

function deleteOrderByID(id) {
    const filteredOrders = orders.filter(order => order.id !== id)
    fs.writeFileSync("orders.json", JSON.stringify(filteredOrders))
}

module.exports = {
    getAllOrders,
    deleteOrderByID
}