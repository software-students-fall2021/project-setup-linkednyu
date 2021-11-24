const Post = require('../models/Post')


const viewPost = async (req, res) => {
    
    const userFound = await Post.findOne({ _id:req.params.id})

    if (!userFound) return res.status(409).json({message:"User not found"});
    
    res.status(200).send(userFound)
    
};


module.exports ={
    viewPost
}