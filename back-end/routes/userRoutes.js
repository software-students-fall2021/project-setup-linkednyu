const express = require("express");
const router = express.Router();
const routeFunctions = require("../controllers/routeFunctions");


// routes
router.get('/homeposts',routeFunctions.viewHome)
router.get('/channel/:id',routeFunctions.viewChannel)

module.exports = router;