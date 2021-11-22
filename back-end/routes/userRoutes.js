const express = require("express");
const router = express.Router();
// const routeFunctions = require("../controllers/routeFunctions");
const homeFunctions = require('../controllers/homePage')
const detailedPostFunctions = require('../controllers/detailedPost')
const channelFunctions = require("../controllers/channelDetail");
const authFunctions = require("../controllers/auth")
const accountFunctions = require("../controllers/account")
const verify = require('../controllers/tokenVerify')


// routes
router.post('/register',authFunctions.signUp)
router.post('/login',authFunctions.login)
router.get('/detailedposts/:id', detailedPostFunctions.viewPost)
// router.post('/homeposts', routeFunctions.sendPosts)
router.get('/homeposts', homeFunctions.viewHome)
router.get('/userAccount', verify,  accountFunctions.viewAccount)
// router.get('/channel/:id', routeFunctions.viewChannel)
router.post('/channel/detail/:id', channelFunctions.channel)
router.post('/channel/join/:id', channelFunctions.joinChannel)
router.post('/channel/leave/:id', channelFunctions.leaveChannel)
// router.post('/comments', routeFunctions.sendComment)
// router.get('/comments', routeFunctions.viewComment)



module.exports = router;