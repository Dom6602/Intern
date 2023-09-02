const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const connectToDatabase = require('../db_connector')

const User = require('../models/create')

const insertData = require('../models/productInsert');

const auth = require('../middleware/auth')

const adminAuth = require('../middleware/admin');



router.post("/", async (req, res) => {

  const accessToken = req.header('x-auth-token')

  const validateToken = auth(accessToken)

  const emailtoFind = await User.findOne({ username: validateToken }).exec();

  const role = adminAuth(emailtoFind.role)
  // console.log(role);


  if(role === "Authorized") {

    const {
      title,
      adType,
      description,
      category,
      price,
      productImage,
      name,
      number,
      email,
      address,
      adOption,
      paymentOption,
    } = req.body;

  // console.log(title, adType, description, category, price, name, number, email, address, adOption, paymentOption);

    productDate = new Date();

    const productDetails = {

      Title: title,
      AdType: adType,
      Description: description,
      Category: category,
      Price: price,
      ProductImage: productImage,
      Name: name,
      Number: number,
      Email: email,
      Address: address,
      AdOption: adOption,
      PaymentOption: paymentOption,
      AddedAt: productDate

    };

    await connectToDatabase();

    const db = mongoose.connection;
    const productList = db.collection('products');

    const product = await productList.findOne({ title: title })

    if (product) {
      res.status(200).json({ message: "Already Added" });
    }
    else{

        try {
            await insertData(productDetails);
            res.status(200).json({ message: "Product Added Successful" });
        } catch (error) {
            res.status(500).json({ message: "Product Added Failed" });
        }
    }

  }
  else {
    res.status(404).json({ message: "Not Authorized" });
  }


});

module.exports = router;
