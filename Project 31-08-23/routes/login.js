const express = require('express')
const router = express.Router()

const mongoose = require("mongoose");
const connectToDatabase = require('../db_connector')

// const config = require('config');
const config = require('../config/custom-environment-variables.json')
const jwt = require('jsonwebtoken')

router.post("/", async (req, res) => {

    const { email, password } = req.body;

    const userValues = {

        Email: email,
        Password: password
    };

    console.log(userValues);
   
    await connectToDatabase();

    const db = mongoose.connection;
    const userList = db.collection('users');

    const user1 = await userList.findOne({ username: email })
    const user = await userList.findOne({ username: email, password: password })
    // console.log(user.role);


    if (!user1) {
        res.status(200).json({ message: "Account Not Exists" });
    }
    else if(user){

        const jwtSecret = config.jwtPrivateKey;
        // console.log(jwtSecret);

        const token = jwt.sign({username: email}, jwtSecret , {
            expiresIn: "10h"
        })
        // console.log(token);

        // res.cookie('x-auth-token', token, {
        //     httpOnly:true,
        //     maxAge:7 * 24 * 60 * 60 * 1000
        // })

        res.status(200).header('x-auth-token', token).json({ message: "Login Successful", token: token, page: user.role });
        // res.status(200).json({ message: "Login Successful", token: token });

    }
    else{
        res.status(401).json({ message: "Incorrect Username or Password" });
    }
 
});

module.exports = router;

