const Post = require('../models/Post')
const User = require('../models/User')
const { likeValidation } = require('./validation')


const viewPost = async (req, res) => {

    const userFound = await Post.findOne({ _id: req.params.id })

    if (!userFound) return res.status(409).json({ message: "User not found" });

    res.status(200).send(userFound)

};

const likePost = async (req, res) => {
    const like = req.body

    const error = likeValidation(like).error;
    if (error) {
        console.log(error);
        return res.status(409).json({ errors: error.details[0].message })
    }

    const isLiked = like.isLiked
    const userFound = await User.findOne({ _id: req.user._id })
    try {
        if (isLiked) {
            const likeUpdate = await Post.findOneAndUpdate({ _id: req.params.id }, { $pull: { like: userFound._id } })
            res.status(200).json(likeUpdate)
        } else {
            const likeUpdate = await Post.findOneAndUpdate({ _id: req.params.id }, { $push: { like: userFound._id } })
            res.status(200).json(likeUpdate)
        }
    } catch (error) {
        res.status(409).json({ message: error })
    }
}


module.exports = {
    viewPost,
    likePost
}