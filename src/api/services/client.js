const fs = require("fs")
const path = require("path")

const productsPath = path.join(__dirname, "..", "..", "..", "data", "clients.json")

function getClientById(id) {
    const clients = JSON.parse(fs.readFileSync(productsPath, "utf-8"))
    return clients.find(client => client.id === id)
}

module.exports = {
    getClientById
}