const mongoose = require('mongoose')

const savingBankSchema = mongoose.Schema({
    paymentAmount: Number,
    paymentDate: Date,
    paymentTitle: String
}, { timestamps: true })

module.exports = mongoose.model('SavingBank', savingBankSchema)
