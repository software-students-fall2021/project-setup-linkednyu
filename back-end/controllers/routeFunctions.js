const axios = require('axios');
const mongoose = require('mongoose')
// using arrays to mimic database , uncomment which one of these arrays you might be using
var postData = []
var commentData = []
var accountData = []
var pictures = []

const postSchema = mongoose.Schema({ //model for post messages
    id: Number,
    title: String,
    text: String,
    userName: String,
    courseName: String,
    avatar: String,
    imgSrc: String,
    comments: [String],
    selectedFile: String,
    date: {
        type: Date,
        default: new Date()
    },
})

const PostModel = mongoose.model('PostModel', postSchema) //set the model

function custom_sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}

const viewHome = async (req, res) => {
    try{
        const postMessages = await PostModel.find() //async since find postmessage takes time
        console.log(postMessages)
        res.status(200).json(postMessages) //success
    }catch (err) {
        res.status(404).json({ message: err.message }) //failed
        console.log(err)
    }
    // const url = "https://my.api.mockaroo.com/posts.json?key=2ae40da0"
    // const picurl = "https://picsum.photos/v2/list"
    // let posts = []

    // if (postData.length === 0) {
    //     async function fetchposts() {
    //         try {
    //             await axios.get(url).then(response => {
    //                 response.data.map(items => {
    //                     posts.push(items)
    //                 })

    //                 for (let i = 0; i < posts.length; i++) {
    //                     for (let j = 0; j < 5; j++) {
    //                         posts[i]["comments"].push(Math.floor(Math.random() * 8))
    //                     }
    //                 }

    //             })

    //             await axios.get(picurl).then(response => {
    //                 response.data.map(items => {
    //                     pictures.push(items)
    //                 })
    //                 for (let i = 0; i < posts.length; i++) {
    //                     posts[i]["imgSrc"] = pictures[Math.floor(Math.random() * 29)].download_url

    //                 }
    //                 posts.map(items => {
    //                     postData.push(items)
    //                 })
    //             })

    //         } catch (err) {
    //             console.log(err);
    //         }

    //         postData.sort(custom_sort)
    //         res.send(postData)
    //     }

    //     fetchposts()


    // }

    // else {
    //     res.send(postData)
    // }

};



const viewChannel = (req, res) => {
    let channelPosts = []

    for (let i = 0; i < 7; i++) {
        channelPosts.push(postData[Math.floor(Math.random() * postData.length)])
    }

    res.send(channelPosts)


};



//function for comments
const viewComment = (req, res) => {
    const commenturl = "https://my.api.mockaroo.com/comments.json?key=500332d0"

    let comments = []

    if (commentData.length === 0) {
        async function fetchcomments() {
            try {

                await axios.get(commenturl).then(response => {
                    response.data.map(items => {
                        comments.push(items)
                    })
                    comments.map(items => {
                        commentData.push(items)
                    })
                })

            } catch (err) {
                console.log(err);
            }

            commentData.sort(custom_sort)
            res.send(commentData)
        }

        fetchcomments()

    }

    else {
        res.send(commentData)
    }
}

const sendComment = (req, res) => {
    commentData.push(req.body)
    res.status(200).send(req.body)
}

const sendPosts = async (req, res) => {
    const post = req.body //grab the request to post
    const newPost = new PostModel(post) //create new postmsg to store in db
    try{
        await newPost.save() //save into db
        res.status(201).json(newPost)
    }catch (err){
        res.status(409).json({ message: err.message})
    }
}

const viewAccount = (req, res) => {
    accountData = []
    accountData = accountData.concat(postData)
    res.send(accountData)   

}


module.exports = {
    viewHome,
    viewChannel,
    viewComment,
    sendComment,
    sendPosts,
    viewAccount
}