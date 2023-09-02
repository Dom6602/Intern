const express = require('express')
const router = express.Router()

const mongoose = require("mongoose");
const connectToDatabase = require('../db_connector');

const User = require('../models/create')

const auth = require('../middleware/auth')

const adminAuth = require('../middleware/admin')


router.get("/", async  (req, res) => {

    const accessToken = req.header('x-auth-token')
    // console.log("accesstoken",accessToken);

    const validateToken = auth(accessToken)
    console.log(validateToken);

    if(validateToken !== "Invalid token") {

        const emailtoFind = await User.findOne({ username: validateToken }).exec();
        // console.log(emailtoFind);

        const role = adminAuth(emailtoFind.role)
        // console.log(role);

        res.status(200).json({ message: "Role Checked Successfully", Role: role, userEmail: validateToken })
    }
    else {
        res.status(200).json({ message: "Role Checked Successfully", Role: "invalid" })
    }

})
module.exports = router;