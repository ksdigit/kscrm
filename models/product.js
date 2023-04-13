const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    category: String,
    name: String,
    purchasePrice: Number,
    salePrice: Number,  
    quantity: Number,
    limit: Number,
    expirationDate: Date
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)
