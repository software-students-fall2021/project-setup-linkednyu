const mongoose = require('mongoose')
const Post = require('../models/Post')



const viewHome = async (req, res) => {
    
    const userFound = await Post.find({}).sort({date:-1})

    res.status(200).send(userFound)
    

};

module.exports = {
    viewHome
}