const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number
    },
    degree: {
        type: String
    },
    year: {
        type: Number
    },
    dept: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;