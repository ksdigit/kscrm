const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: String,
    description: String
}, { timestamps: true })

module.exports = mongoose.model('Category', categorySchema)
