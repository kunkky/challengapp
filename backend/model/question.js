const mongoose = require('mongoose');
const postSchema =new mongoose.Schema({
   
    author: {
        type: String
    },
    solution: {
        type: String
    },
    question: {
        type: String
    },
    questionType: {
        type: String,
        minlength: 3,
        maxlength: 20
    },
    questionLevel: {
        type: String,
        minlength: 3,
        maxlength: 20
    },
    dateCreated:{
    type:String, default:new Date()
    },
    dateUpdated: {
        type: String, default: new Date()
    }

})

const Questions =mongoose.model('questions', postSchema);
module.exports.Questions = Questions