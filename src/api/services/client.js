const fs = require("fs")

function getClientById(id) {
    const clients = JSON.parse(fs.readFileSync("clients.json"))
    return clients.find(client => client.id === id)
}

module.exports = {
    getClientById
}