

const User = require("../models/User")


const GetAllUser = async(req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })

}

module.exports = { GetAllUser}

