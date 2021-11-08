const express = require("express");
const router = express.Router();
const routeFunctions = require("../controllers/routeFunctions");


// routes
// router.post('/homeposts',routeFunctions.sendPosts)
router.get('/homeposts', routeFunctions.viewHome)
// router.post('channel/:id',routeFunctions.postChannel)
router.get('/channel/:id', routeFunctions.viewChannel)

//should add an id
router.get("/detailedposts/:id", routeFunctions.viewHome)
router.post('/comments',routeFunctions.sendComment)
router.get('/comments', routeFunctions.viewComment)


module.exports = router;