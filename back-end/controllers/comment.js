const Comment = require('../models/Comment');

function custom_sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}

//function for comments
const viewComment = async (req, res) => {
    try {
        const commentMessages = await Comment.find({ post_id: req.params.id })

        //{ _id: 5 }
        console.log(commentMessages)
        res.status(200).json(commentMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const sendComment = async (req, res) => {
    const comment = req.body
    const newComment = new Comment({
        userName: comment.userName,
        avatar: comment.avatar,
        content: comment.content,
        date: comment.date,
        post_id: comment.post_id
    })

    try {
        const savedComment = await newComment.save()

        res.status(201).json(savedComment)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = {
    viewComment,
    sendComment
}