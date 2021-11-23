const Post = require('../models/Post')

const viewChannel = async (req, res) => {

    const channelFound = Post.find({coursename: req.post.coursename})

    if(!channelFound) return res.status(409).json({message:"User not found"});

    res.status(200).send(channelFound)
}

module.exports = {
    viewChannel
}