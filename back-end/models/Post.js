const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    avatar:{
        type:String,
        default:'https://robohash.org/etiustodolorum.png?size=50x50&set=set1'
    },
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        default:[]
    },
    coursename:{
        type:String,
        required:true
    },
    imgSrc :{
        type:String,
        default:'https://picsum.photos/id/1004/5616/3744'
    },
    content:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('posts',userSchema)