
const Post = require('../models/Post')



const viewHome = async (req, res) => {
    
    const userFound = await Post.find({}).sort({date:-1})

     if (!userFound) return res.status(409).json({message:"User not found"});

    res.status(200).send(userFound)
    

};


module.exports = {
    viewHome,
}