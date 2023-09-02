
const User = require("../models/create");

const router = require('../routes/register')

const insertData = async (userValues) => {
  // console.log(userValues)
  try {
    const newUser = new User({
      username: userValues.Email,
      password: userValues.Password
    });

    await newUser.save();
    console.log("New user saved to the database");
  } catch (error) {
    console.error("Error saving user:", error);
  }
};

module.exports = insertData;
