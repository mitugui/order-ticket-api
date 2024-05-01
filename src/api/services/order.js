const fs = require("fs")
const path = require("path")
const ClientService = require("./client")
const ProductService = require("./product")

const ordersPath = path.join(__dirname, "..", "..", "..", "data", "orders.json")

const orders = JSON.parse(fs.readFileSync(ordersPath, "utf-8"))

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