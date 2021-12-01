const User = require('../models/User')
const { infoValidation } = require('./validation')

const viewAccount = async (req, res) => {

    const userFound = await User.findOne({ _id: req.user._id })

    if (!userFound) return res.status(409).json({ message: "User not found" });

    res.status(200).send(userFound)

}

const updateAccount = async (req, res) => {

    const info = req.body
    res.status(200).send(info)
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
        // const savedComment = await newComment.save()
        res.status(200).json(infoUpdate)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}

module.exports = {
    viewAccount,
    updateAccount
}