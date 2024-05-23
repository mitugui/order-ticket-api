const mongoose = require("mongoose")

const Schema = mongoose.Schema

const orderItemSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

const orderSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    clientName: { type: String, required: true },
    items: { type: [orderItemSchema], required: true }
}, { versionKey: false, timestamps: true })

const Order = mongoose.model("order", orderSchema)

module.exports = Order