const mongoose = require('mongoose');
const levelSchema = new mongoose.Schema({
    questionLevel: {
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

const Levels = mongoose.model('levels', levelSchema);
module.exports.Levels = Levels