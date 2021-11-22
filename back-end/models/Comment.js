
const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://robohash.org/etiustodolorum.png?size=50x50&set=set1'
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;