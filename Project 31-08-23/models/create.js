const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    unique: true,
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  profileimage: {
    type: String
  },
  comunityname: {
    type: String
  },
  zipcode: {
    type: String
  },
  profileimage: {
    type: String
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  }
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
