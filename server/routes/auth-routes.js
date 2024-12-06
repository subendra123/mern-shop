
const express = require('express');
const router = express.Router();


const {registerUser} = require("../controllers/auth-controll");


router.route("/register").post(registerUser);

module.exports = router;




