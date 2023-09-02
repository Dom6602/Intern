const express = require('express')
const router = express.Router()

const mongoose = require("mongoose");
const connectToDatabase = require('../db_connector');

const Product = require('../models/productCreate')

router.post("/", async  (req, res) => {

        const { currentEmail } = req.body

        await connectToDatabase();

        const db = mongoose.connection;
        const productList = db.collection('products');
        // console.log(productList);

        const product = await Product.find({ email: currentEmail });
        // console.log(product);

        res.status(200).json({ message: "Seller Product Retrieved Successfully", Products: product })

     })




module.exports = router;

