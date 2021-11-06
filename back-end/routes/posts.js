const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    //get the data from new post form and send it to post list by axios get from client side
    res.send('Post List')
})

router.get("/new", (req, res) => {
    res.send("New Post List")
})

router.post("/", (req, res) => {
    //get the data from client to display on the post list page by axios post from client side
    res.send("Create New Post")
})

router
    .route("/:postId")
    .get((req, res) => { //dynamic params invoked last
        console.log(req.post)
        res.send(`Get Post with ID ${req.params.postId}, post content ${req.post.content}`)
    })
    .put((req, res) => {
        res.send(`update post Id ${req.params.postId}`)
    })
    .delete((req, res) => {
        res.send(`delete post Id ${req.params.postId}`)
    })

const posts = [{ content: "foo" }, { content: "boo" }]

router.param("postId", (req, res, next, postId) => {
    req.post = posts[postId]
    next()
}) 

module.exports = router