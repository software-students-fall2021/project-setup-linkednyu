const express = require("express");
const router = express.Router();
// const routeFunctions = require("../controllers/routeFunctions");
const homeFunctions = require('../controllers/homePage')
const detailedPostFunctions = require('../controllers/detailedPost')
const channelFunctions = require("../controllers/channelDetail");
const authFunctions = require("../controllers/auth")
const accountFunctions = require("../controllers/account")
const verify = require('../controllers/tokenVerify')
const comment = require('../controllers/comment')
const newPostFunctions = require('../controllers/newPost')
const channel = require('../controllers/channel')


// routes
router.post('/register', authFunctions.signUp)
router.post('/login', authFunctions.login)
router.get('/detailedposts/:id', detailedPostFunctions.viewPost)
router.post('/homeposts', newPostFunctions.sendPosts)
router.get('/homeposts', homeFunctions.viewHome)
router.get('/userAccount', verify, accountFunctions.viewAccount)
router.get('/channel/:coursname', channel.viewChannel)
router.get('/channel/detail/:id', channelFunctions.channel)
router.post('/channel/join', channelFunctions.joinChannel)
router.post('/channel/leave', channelFunctions.leaveChannel)
router.post('/channel/isJoined', channelFunctions.isJoined)
router.post('/comments/:id', comment.sendComment)
router.get('/comments/:id', comment.viewComment)



module.exports = router;