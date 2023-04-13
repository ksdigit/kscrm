const mongoose = require('mongoose')

const purchaseSchema = mongoose.Schema({
    purchaseTitle: String,
    vendor: mongoose.Types.ObjectId,
    typeOfPayment: String,
    invoiceRef: String,
    invoiceAmount: Number,
    paidAmount: Number,
}, { timestamps: true })

module.exports = mongoose.model('Purchase', purchaseSchema)
