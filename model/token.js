const mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
    user_id: {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    },
    token: {
        type: String,
        minlength: 2,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        expires: '1d', // This sets the TTL for 3 days
        default: Date.now
    },
        dateUpdated: {
        type: String,
        default: new Date()
    }


})

const Tokens = mongoose.model('tokens', tokenSchema);
module.exports.Tokens = Tokens