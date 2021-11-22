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
    },
    content:{
        type:String,
        required:true,
    },
    comments:{
        type:Array,
        default:[]
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('posts',userSchema)