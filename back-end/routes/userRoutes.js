const express = require("express");
const router = express.Router();
const routeFunctions = require("../controllers/routeFunctions");
const channelFunctions = require("../controllers/channelDetail");

// routes
// router.post('/homeposts',routeFunctions.sendPosts)
router.get('/homeposts', routeFunctions.viewHome)
// router.post('channel/:id',routeFunctions.postChannel)
router.get('/channel/:id', routeFunctions.viewChannel)
router.get("/detailedposts/:id", routeFunctions.viewHome)
router.post('/channel/detail/:id', channelFunctions.channel)
router.post('/channel/join/:id', channelFunctions.joinChannel)
router.post('/channel/leave/:id', channelFunctions.leaveChannel)
<<<<<<< HEAD
router.post('/homeposts', routeFunctions.sendPosts)
router.post('/comments',routeFunctions.sendComment)
=======
router.post('/comments', routeFunctions.sendComment)
>>>>>>> origin/master
router.get('/comments', routeFunctions.viewComment)
router.get('/account/:id', routeFunctions.viewHome)


module.exports = router;