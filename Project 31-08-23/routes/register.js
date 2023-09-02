const express = require('express')
const router = express.Router()
const insertData = require('../models/insert');

const mongoose = require("mongoose");
const connectToDatabase = require('../db_connector')

router.post("/", async (req, res) => {

    const { email, password } = req.body;

    const userValues = {

        Email: email,
        Password: password
    };

    // console.log(userValues); 

    await connectToDatabase();

    const db = mongoose.connection;
    const userList = db.collection('users');

    const user = await userList.findOne({ username: email })

    if (user) {
        res.status(200).json({ message: "Already Registered" });
    }
    else{

        try {
            await insertData(userValues);
            res.status(200).json({ message: "Register Successful" });
        } catch (error) {
            res.status(500).json({ message: "Register Failed" });
        }
    }
    
});

module.exports = router;

