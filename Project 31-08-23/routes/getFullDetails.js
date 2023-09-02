const express = require('express')
const router = express.Router()

const mongoose = require("mongoose");
const connectToDatabase = require('../db_connector');

const User = require('../models/create')

router.post("/", async  (req, res) => {

    const { currentEmail } = req.body
    
    await connectToDatabase();
      
    // const userList = await User.find().exec()
        const userDatas = await User.findOne({ username: currentEmail }).exec();
        // console.log(userDatas);

        if (userDatas) {
            return res.status(200).json({ message: 'User Details Retrieved successfully.', userDatas: userDatas });
        } else {
            return res.status(404).json({ error: 'find error' });
        }

})


module.exports = router;

