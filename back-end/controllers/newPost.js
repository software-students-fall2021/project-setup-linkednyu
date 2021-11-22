const Post = require('../models/Post')
const { postValidation } = require('./validation')

const sendPosts = async (req, res) => {
    
    // const { error } = postValidation(req.body)
    // if(error) return res.status(400).send(error.details[0].message);

    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        coursename: req.body.coursename,
        username: req.body.username,
    })

    console.log(newPost)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    }catch(err){
        res.status(409).json({ message: err.message})
    }
}

module.exports = { sendPosts }
