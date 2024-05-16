const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    price: { type: String, required: true }
}, { versionKey: false })

const product = mongoose.model("products", productSchema)

export { product, productSchema }