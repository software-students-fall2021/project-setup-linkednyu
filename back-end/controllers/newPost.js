const Post = require('../models/Post')
const { postValidation } = require('./validation')

const sendPosts = async (req, res) => {
    
    const { error } = postValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    const newPost = new Post(
        req.body
    )

    try{
        await newPost.save()
        
        res.status(201).json(newPost)
    }catch(err){
        res.status(409).json({ message: err.message})
    }
}

module.exports = { sendPosts }
