const mongoose = require('mongoose')

const damageSchema = mongoose.Schema({
    product: mongoose.Types.ObjectId,
    quantity: Number,
    createdAt: Date,  
    lostedAt: Date
})

module.exports = mongoose.model('Damage', damageSchema)
