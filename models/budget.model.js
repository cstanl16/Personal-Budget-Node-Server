const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        },
        date: {
            type: String,
            required: true
        },
    });

    const Budget = mongoose.model('Budget', budgetSchema);

    module.exports = Budget;