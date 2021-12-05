const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    message:{
        type:String,
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6
    },
    channel:{
        type:Array,
        default:[]
    },
    date:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
        default:'student' // student, professor, admin
    }
})

module.exports = mongoose.model('users',userSchema)