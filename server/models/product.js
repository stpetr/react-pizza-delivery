const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    image: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
