// const config = require("config");
// const jwt = require("jsonwebtoken");
const router = require("../routes/profile");

const config = require('../config/custom-environment-variables.json')
const jwt = require('jsonwebtoken')

const jwtSecret = config.jwtPrivateKey;
// console.log(jwtSecret);

function auth(test) {
    const token = test
    console.log(token);

    try{

        const currentTime = Math.floor(Date.now() / 1000);
        // console.log(currentTime);

            const tokenVerify = jwt.verify(token, jwtSecret)
            console.log("token verified", tokenVerify);

            // const tokenVerify = jwt.decode(token);
            // console.log("token verified", tokenVerify);
            
            const expirationTime = tokenVerify.exp;
            // console.log(expirationTime);

            if(tokenVerify == null)
                return ('Invalid token')

            else if(expirationTime <= currentTime)
                return ('Invalid token')
            else
                return (tokenVerify.username)
    }
    catch(err){
        // return (err)
        return ('Invalid token')
    }
}


module.exports = auth;