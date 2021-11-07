// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object

// import some useful middleware
// const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
const mongoose = require("mongoose")
const cors = require("cors")

/**
 * Typically, all middlewares would be included before routes
 * In this file, however, most middlewares are after most routes
 * This is to match the order of the accompanying slides
 */

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data
app.use(cors()) //communicate between server and client

//code goes here
// This is a test code , you can delete it
app.get('/',(req,res)=>{
    res.send("This is working")
})

const postSchema = mongoose.Schema({ //declare a model to store in DB
    title: String,
    text: String,
    userName: String,
    courseName: String,
    isDraft: Boolean,
    date: String,
    avatar: String,
    image: String,
})

const PostMessage = mongoose.model('PostMessage', postSchema)

const posts = []

app.get('/posts', (req, res) => {
    res.send(posts)
    console.log('sended')
})

app.post('/posts', (req, res) => {
    const newPost = new PostMessage(req.body)
    posts.push(newPost)
})

// export the express app we created to make it available to other modules
module.exports = app // CommonJS export style!