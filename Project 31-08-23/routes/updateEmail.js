const express = require('express')
const router = express.Router()

const mongoose = require("mongoose");
const connectToDatabase = require('../db_connector');

const User = require('../models/create')

router.post("/", async  (req, res) => {

    const { currentEmail, updateEmail } = req.body

    console.log(currentEmail);
    
    await connectToDatabase();
      
    // const userList = await User.find().exec()
        const emailtoUpdate = await User.findOne({ username: currentEmail }).exec();
        
        if (emailtoUpdate) {
            emailtoUpdate.username = updateEmail;
            await emailtoUpdate.save();

            return res.status(200).json({ message: 'User email updated successfully.' });
        } else {
            return res.status(404).json({ error: 'find error' });
        }

})


module.exports = router;

