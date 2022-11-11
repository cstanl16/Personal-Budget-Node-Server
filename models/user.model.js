const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        name: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        dogType: {
            type: String,
            required: false
        },
        dogName: {
            type: String,
            required: false
        },
    });

    const User = mongoose.model('User', userSchema);

    module.exports = User;