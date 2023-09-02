const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')

router.get("/",  (req, res) => {

    const accessToken = req.header('x-auth-token')
    
    // console.log("accesstoken",accessToken);

    const validateToken = auth(accessToken)
    console.log(validateToken);

    if(validateToken == "Invalid token")
        res.status(401).json({ message: "Profile Loaded Failed" });
    else
        res.status(200).json({ message: "Profile Loaded Successfully", userDetails: validateToken });
});






module.exports = router;

