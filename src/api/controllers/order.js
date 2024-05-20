const { getAllOrders, insertOrder, deleteOrderByID } = require("../services/order")

async function getOrders(req, res) {
    try {
        const orders = await getAllOrders()
        res.send(orders)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function postOrder(req, res) {
    try {
        const data = req.body
        const newOrder = await insertOrder(data)

        res.status(201).json({ message: "Produto inserido com sucesso!", newOrder })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

async function deleteOrder(req, res) {
    try {
        const id = req.params.id
        await deleteOrderByID(id)
        res.send("Item excluído com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getOrders,
    postOrder,
    deleteOrder
}