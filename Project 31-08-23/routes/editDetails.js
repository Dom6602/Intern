const express = require('express')
const router = express.Router()

const mongoose = require("mongoose");
const connectToDatabase = require('../db_connector');

// const multer = require('multer');
// const storage = multer.memoryStorage();
// const upload = multer({ storage });
// upload.single('profileImage')
// const profileImage = req.file.buffer
// console.log(profileImage);
// const base64Image = profileImage.toString('base64');

const User = require('../models/create')

router.post("/", async (req, res) => {

    let { firstName, lastName, profileImage, comunityName, zipCode, currentEmail } = req.body

    console.log(zipCode);
    
    const userDetailsAdd = await User.findOne({ username: currentEmail }).exec();

    console.log(userDetailsAdd);
    if (profileImage == "") {
        finalprofileImage = userDetailsAdd.profileimage
        console.log(finalprofileImage);
    }
    else {
        finalprofileImage = profileImage
    }

    if (userDetailsAdd) {

        userDetailsAdd.firstname = firstName;
        userDetailsAdd.lastname = lastName;
        userDetailsAdd.profileimage = finalprofileImage;
        userDetailsAdd.comunityname = comunityName;
        userDetailsAdd.zipcode = zipCode;
        userDetailsAdd.profileimage = profileImage;

        await userDetailsAdd.save();

        return res.status(200).json({ message: 'User Details Updated successfully.', image: profileImage});
    }
    else {
        return res.status(500).json({ message: 'some error' });
      }


})


module.exports = router;