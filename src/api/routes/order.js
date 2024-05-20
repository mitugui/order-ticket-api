const { Router } = require("express")
const { getOrders, postOrder, deleteOrder } = require("../controllers/order")

const router = Router()

router.get('/', getOrders)
router.post('/', postOrder)
router.delete('/:id', deleteOrder)

module.exports = router