const { getAllOrdersWithDetails, deleteOrderByID } = require("../services/order")

function getOrders(req, res) {
    try {
        const orders = getAllOrdersWithDetails()
        res.send(orders)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteOrder(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteOrderByID(id)
            res.send("Item excluído com sucesso")  
        } else {
            res.status(422)
            res.send("Id inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getOrders,
    deleteOrder
}