const User = require('../models/User')
const Post = require('../models/Post')
const { infoValidation } = require('./validation')

const viewAccount = async (req, res) => {

    const userFound = await User.findOne({ _id: req.user._id })

    if (!userFound) return res.status(409).json({ message: "User not found" });

    res.status(200).send(userFound)

}

const updateAccount = async (req, res) => {

    const info = req.body
    const error = infoValidation(info).error;
    if (error) {
        console.log(error);
        return res.status(409).json({ errors: error.details[0].message })
    }

    const newInfo = {
        profile: info.profile,
        info: info.info,
        message: info.message
    }

    try {
        const infoUpdate = await User.findOneAndUpdate({ _id: req.user._id }, newInfo, {
            new: true
        })
        
        await Post.updateMany({username:infoUpdate.username},{ $set: { "avatar" : info.profile } })
        res.status(200).json(infoUpdate)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}

const deletePost = async (req, res) => {

    try {
        const postDeleted = await Post.deleteOne({ _id: req.body._id });
        res.status(200).json(postDeleted)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}

module.exports = {
    viewAccount,
    updateAccount,
    deletePost
}
