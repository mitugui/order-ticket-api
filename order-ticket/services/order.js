const fs = require("fs")

function getAllOrders() {
    return JSON.parse(fs.readFileSync("orders.json"))
}

module.exports = {
    getAllOrders
}