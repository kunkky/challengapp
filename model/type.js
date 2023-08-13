const mongoose = require('mongoose');
const typeSchema = new mongoose.Schema({
    questionType: {
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

const Types = mongoose.model('types', typeSchema);
module.exports.Types = Types