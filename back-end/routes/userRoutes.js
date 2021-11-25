const express = require("express");
const router = express.Router();
const homeFunctions = require('../controllers/homePage')
const detailedPostFunctions = require('../controllers/detailedPost')
const channelFunctions = require("../controllers/channelDetail");
const authFunctions = require("../controllers/auth")
const accountFunctions = require("../controllers/account")
const verify = require('../controllers/tokenVerify')
const comment = require('../controllers/comment')
const newPostFunctions = require('../controllers/newPost')


// routes
router.post('/register', authFunctions.signUp)
router.post('/login', authFunctions.login)
router.post('/reset',authFunctions.resetPassword)
router.get('/detailedposts/:id', verify, detailedPostFunctions.viewPost)
router.post('/homeposts', newPostFunctions.sendPosts)
router.get('/homeposts', homeFunctions.viewHome)
router.get('/userAccount', verify, accountFunctions.viewAccount)
router.get('/channel/:id',verify, channelFunctions.viewChannel)
router.get('/channel/detail/:id', channelFunctions.oneChannel)
router.get('/channels',verify,channelFunctions.allChannels)
router.post('/channel/join', channelFunctions.joinChannel)
router.post('/channel/leave', channelFunctions.leaveChannel)
router.post('/channel/isJoined', channelFunctions.isJoined)
router.post('/comments/:id', comment.sendComment)
router.get('/comments/:id',verify, comment.viewComment)



module.exports = router;