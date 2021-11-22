const Post = require('../models/Post')


const viewPost = async (req, res) => {
    console.log(req.params);
    
    const userFound = await Post.findOne({ _id:req.params.id})
    
    res.status(200).send(userFound)
    
};


module.exports ={
    viewPost
}