const mongoose = require('mongoose');
const stackSchema = new mongoose.Schema({
    userStack: {
        type: String,
        minlength: 3,
        maxlength: 50,
        unique: true,
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

const Stacks = mongoose.model('stacks', stackSchema);
module.exports.Stacks = Stacks