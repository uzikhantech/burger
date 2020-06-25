const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//TODO
//create router.create
//create router.post
//create router.put

// Export routes for server.js to use.
module.exports = router;