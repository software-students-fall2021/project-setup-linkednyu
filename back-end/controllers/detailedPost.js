const Post = require('../models/Post')


const viewPost = async (req, res) => {

    const userFound = await Post.findOne({ _id: req.params.id })

    if (!userFound) return res.status(409).json({ message: "User not found" });

    res.status(200).send(userFound)

};

const likePost = async (req, res) => {
    const user = req.user._id
    const error = commentValidation(comment).error;
    if (error) {
        console.log(error);
        return res.status(409).json({ errors: error.details[0].message })
    }

    try {
        const savedComment = await newComment.save()
        res.status(200).json(savedComment)
    } catch (error) {

        res.status(409).json({ message: error.message })
    }
}


module.exports = {
    viewPost,
    likePost
}