const mongoose = require("mongoose")
const { productSchema } = require("./Product.js")

const orderSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    clientName: { type: String, required: true },
    items: { type: [productSchema], required: true }
}, { versionKey: false })

const Order = mongoose.model("order", orderSchema)

module.exports = Order