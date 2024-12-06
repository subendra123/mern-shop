const express = require('express');
const { GetAllUser } = require('../controllers/userControllers');


const router = express.Router(GetAllUser);


router.route("/all").get();


module.exports = router;

