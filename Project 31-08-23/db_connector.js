const mongoose = require("mongoose");

const url ="mongodb+srv://devil:zxcv@cluster.hzzhj3n.mongodb.net/shopping_management?retryWrites=true&w=majority";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to the MongoDB server");
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = connectToDatabase;