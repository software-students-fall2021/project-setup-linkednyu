const User = require('../models/User')

const viewAccount = async (req, res) => {

    const userFound = await User.findOne({ _id: req.user._id })

    if (!userFound) return res.status(409).json({ message: "User not found" });

    res.status(200).send(userFound)

}

const editAccount = async (req, res) => {

    const userFound = await User.findOne({ _id: req.user._id })

    if (!userFound) return res.status(409).json({ message: "User not found" });

    res.status(200).send(userFound)

}

const updateAccount = async (req, res) => {

    const userFound = await User.findOne({ _id: req.user._id })

    if (!userFound) return res.status(409).json({ message: "User not found" });

    res.status(200).send(userFound)

}

module.exports = {
    viewAccount,
    editAccount,
    updateAccount
}