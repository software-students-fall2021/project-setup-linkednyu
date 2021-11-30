const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    channel: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    },
    profile: {
        type: String,
        default: "https://robohash.org/etiustodolorum.png?size=50x50&set=set1"
    },
    bio: {
        type: String,
        default: "student"
    },
    message: {
        type: String,
        default: "say somthing about yourself ..."
    }
})

module.exports = mongoose.model('users', userSchema)