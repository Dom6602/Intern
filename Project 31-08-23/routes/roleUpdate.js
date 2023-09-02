const express = require('express')
const router = express.Router()

const mongoose = require("mongoose");
const connectToDatabase = require('../db_connector');

const User = require('../models/create')

router.post("/", async  (req, res) => {

    const { Email, Role } = req.body
    
    await connectToDatabase();
      
    // const userList = await User.find().exec()
        const roletoUpdate = await User.findOne({ username: Email }).exec();
        
        if (roletoUpdate) {
            roletoUpdate.role = Role;
            await roletoUpdate.save();

            return res.status(200).json({ message: 'User Role updated successfully.' });
        } else {
            return res.status(404).json({ error: 'find error' });
        }

})


module.exports = router;

