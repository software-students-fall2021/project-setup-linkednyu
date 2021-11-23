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
    },
    post_id: {
        type: String,
        required: true
    }
})

const Comment = mongoose.model('comments', commentSchema)

module.exports = Comment;