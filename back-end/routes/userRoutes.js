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
router.post('api/register', authFunctions.signUp)
router.post('api/login', authFunctions.login)
router.post('api/reset', authFunctions.resetPassword)
router.get('api/detailedposts/:id', verify, detailedPostFunctions.viewPost)
router.post('api/like/:id', verify, detailedPostFunctions.likePost)
router.post('api/homeposts', verify, newPostFunctions.sendPosts)
router.get('api/homeposts', homeFunctions.viewHome)
router.get('api/userAccount', verify, accountFunctions.viewAccount)
router.post('api/editaccount', verify, accountFunctions.updateAccount)
router.post('api/deletePost', verify, accountFunctions.deletePost)
router.get('api/channel/:id', verify, channelFunctions.viewChannel)
router.get('api/channel/detail/:id', verify, channelFunctions.oneChannel)
router.get('api/channels', verify, channelFunctions.allChannels)
router.post('api/channel/join', verify, channelFunctions.joinChannel)
router.post('api/channel/leave', verify, channelFunctions.leaveChannel)
router.post('api/channel/isJoined', verify, channelFunctions.isJoined)
router.post('api/comments/:id', verify, comment.sendComment)
router.get('api/comments/:id', verify, comment.viewComment)



module.exports = router;