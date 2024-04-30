const fs = require("fs")
const ClientService = require("./client")
const ProductService = require("./product")

const orders = JSON.parse(fs.readFileSync("orders.json"))

function getAllOrdersWithDetails() {
    const ordersWithDetails = orders.map(order => {
        const client = ClientService.getClientById(order.clientId)
        const itemsWithProductDetails = order.items.map(item => {
            const product = ProductService.getProductById(item.productId)
            return {
                name: product.name,
                quantity: item.quantity
            }
        })
        
        return {
            id: client.id,
            name: client.name,
            items: itemsWithProductDetails
        }
    })

    return ordersWithDetails
}

function deleteOrderByID(id) {
    const filteredOrders = orders.filter(order => order.id !== id)
    fs.writeFileSync("orders.json", JSON.stringify(filteredOrders))
}

module.exports = {
    getAllOrdersWithDetails,
    deleteOrderByID
}