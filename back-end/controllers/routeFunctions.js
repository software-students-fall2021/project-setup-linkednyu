const axios = require('axios');


// using arrays to mimic database , uncomment which one of these arrays you might be using
var postData = []
var commentData = []
var pictures = []


function custom_sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}

const viewHome = (req, res) => {
    const url = "https://my.api.mockaroo.com/posts.json?key=2ae40da0"
    const picurl = "https://picsum.photos/v2/list"
    let posts = []

    if (postData.length === 0) {
        async function fetchposts() {
            try {
                await axios.get(url).then(response => {
                    response.data.map(items => {
                        posts.push(items)
                    })

                    for (let i = 0; i < posts.length; i++) {
                        for (let j = 0; j < 5; j++) {
                            posts[i]["comments"].push(Math.floor(Math.random() * 8))
                        }
                    }

                })

                await axios.get(picurl).then(response => {
                    response.data.map(items => {
                        pictures.push(items)
                    })
                    for (let i = 0; i < posts.length; i++) {
                        posts[i]["imgSrc"] = pictures[Math.floor(Math.random() * 29)].download_url

                    }
                    posts.map(items => {
                        postData.push(items)
                    })
                })

            } catch (err) {
                console.log(err);
            }

            postData.sort(custom_sort)
            res.send(postData)
        }

        fetchposts()


    }

    else {
        res.send(postData)
    }

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

const sendPosts = (req, res) => {
    postData = [req.body].concat(postData)
    postData.sort(custom_sort)
    res.status(200).send(req.body)
}

// const viewAccount = (req, res) => {
//     accountData = []
//     accountData = accountData.concat(postData)
//     res.send(accountData)   

// }


module.exports = {
    viewHome,
    viewChannel,
    viewComment,
    sendComment,
    sendPosts,
}