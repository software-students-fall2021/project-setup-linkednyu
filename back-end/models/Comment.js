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
    comments:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('comments',userSchema)