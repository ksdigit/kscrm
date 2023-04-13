const mongoose = require('mongoose')

const sellingSchema = mongoose.Schema({
    selling: mongoose.Types.ObjectId,
    quantity: Number,
    limit: Number
}, { timestamps: true })

module.exports = mongoose.model('Selling', sellingSchema)
