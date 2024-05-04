const { Router } = require("express")
const { postProduct } = require("../api/controllers/product")

const router = Router()

router.post("/", postProduct)

module.exports = router