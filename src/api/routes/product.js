const { Router } = require("express")
const { postProduct } = require("../controllers/product")

const router = Router()

router.post("/", postProduct)

module.exports = router