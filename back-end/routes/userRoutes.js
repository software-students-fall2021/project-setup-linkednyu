const express = require("express");
const router = express.Router();
const routeFunctions = require("../controllers/routeFunctions");
const channelFunctions = require("../controllers/channelDetail");

// routes
// router.post('/homeposts',routeFunctions.sendPosts)
router.get('/homeposts', routeFunctions.viewHome)
// router.post('channel/:id',routeFunctions.postChannel)
router.get('/channel/:id', routeFunctions.viewChannel)
//should add an id
router.get("/detailedposts/:id", routeFunctions.viewDetailed)
router.post('/channel/detail/:id', channelFunctions.channel)
router.post('/channel/join/:id', channelFunctions.joinChannel)
router.post('/channel/leave/:id', channelFunctions.leaveChannel)
router.post('/homeposts', routeFunctions.sendPosts)
router.post('/comments',routeFunctions.sendComment)
router.get('/comments', routeFunctions.viewComment)


module.exports = router;