const mongoose = require("mongoose")
import { productSchema } from "./Products.js"

const orderSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    clientName: { type: String, required: true },
    items: { type: [productSchema], required: true }
}, { versionKey: false })

const order = mongoose.model("order", orderSchema)

export default order