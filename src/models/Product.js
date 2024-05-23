const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
}, { versionKey: false, timestamps: true })

const Product = mongoose.model("products", productSchema)

module.exports = { Product, productSchema }