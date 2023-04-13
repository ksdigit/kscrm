const mongoose = require('mongoose')

const vendorSchema = mongoose.Schema({
    name: String,
    phoneNumber: String,
    emailAddress: String,  
    address: String
}, { timestamps: true })

module.exports = mongoose.model('Vendor', vendorSchema)
