const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User = mongoose.model('Six', userSchema);
module.exports = User;