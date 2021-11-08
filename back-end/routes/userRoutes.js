const express = require("express");
const router = express.Router();
const routeFunctions = require("../controllers/routeFunctions");
const channelFunctions = require("../controllers/channelDetail");


// routes
router.get('/homeposts', routeFunctions.viewHome)
router.get('/channel/:id', routeFunctions.viewChannel)
router.post('/channel/detail/:id', channelFunctions.channel)
router.post('/channel/join/:id', channelFunctions.joinChannel)
router.post('/channel/leave/:id', channelFunctions.leaveChannel)
//should add an id
router.get("/detailedposts/:id", routeFunctions.viewHome)
router.get('/comments', routeFunctions.viewComment)

module.exports = router;