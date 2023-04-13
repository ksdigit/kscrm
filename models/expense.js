const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    expenseType: String,
    expenseTitle: String,
    expenseAmount: Number,
    paidAmount: Number,  
    typeOfPayment: String,
    expenseDate: Date,
    description: String
})

module.exports = mongoose.model('Expense', expenseSchema)
