const mongoose = require('mongoose');
const postSchema =new mongoose.Schema({
    title:{
    type:String,
    minlength:3,
    maxlength:20,
    unique:true
    },
    author:{
    type:String
    },
    content: { type: String},
    dateCreated:{
    type:String, default:new Date()
    },
    dateUpdated: {
        type: String, default: new Date()
    }
    

})

const Posts =mongoose.model('posts', postSchema);
module.exports.Posts = Posts