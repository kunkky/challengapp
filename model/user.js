const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        minlength: 3,
        maxlength: 50,
        unique: true,
        required: true
    },
    fullname: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true
    },
    phone: {
        type: String,
        minlength: 3,
        maxlength: 15,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    stack: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String,
        default: new Date()
    },
    dateUpdated: {
        type: String,
        default: new Date()
    }


})

const Users = mongoose.model('users', userSchema);
module.exports.Users = Users