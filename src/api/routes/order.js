const { Router } = require("express")
const { getOrders, deleteOrder } = require("../controllers/order")

const router = Router()

router.get('/', getOrders)
router.delete('/:id', deleteOrder)

module.exports = router