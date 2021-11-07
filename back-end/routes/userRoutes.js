const express = require("express");
const router = express.Router();
const routeFunctions = require("../controllers/routeFunctions");


// routes
router.get('/homeposts', routeFunctions.viewHome)
router.get('/channel/:id', routeFunctions.viewChannel)
//should add an id
router.get('/comments', routeFunctions.viewComment)

module.exports = router;