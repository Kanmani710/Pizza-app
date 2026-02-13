//Importing express to create a routing object
const express = require("express");

const { registerUser, loginUser } = require("../controller/authController");

//Group routes related to authentication
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;

//process.env
//global object of node.js
//provides the env property which host all the env
//variables that were set when the process started
