const { Router } = require("express")
const { getProduct, postProduct } = require("../controllers/product")

const router = Router()

router.get("/:id", getProduct)
router.post("/", postProduct)

module.exports = router