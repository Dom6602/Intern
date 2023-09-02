const express = require('express')
const router = express.Router()

const mongoose = require("mongoose");
const connectToDatabase = require('../db_connector');

const User = require('../models/create')

router.post("/", async  (req, res) => {

    const { currentEmail, currentPassword, updatePassword } = req.body

    // console.log(currentEmail, currentPassword, updatePassword);
    
    await connectToDatabase();
      
    // const userList = await User.find().exec()
        const passwordtoUpdate = await User.findOne({ username: currentEmail, password: currentPassword }).exec();
        
        if (passwordtoUpdate) {
            passwordtoUpdate.password = updatePassword;
            await passwordtoUpdate.save();

            return res.status(200).json({ message: 'User password updated successfully.' });
        } else {
            return res.status(401).json({ message: 'Incorrect Current Password' });
        }

})


module.exports = router;

