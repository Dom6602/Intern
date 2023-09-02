const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const connectToDatabase = require("../db_connector");

const Product = require("../models/productCreate");

router.get("/", async (req, res) => {

  let { name, category, location } = req.query

  console.log(name, category, location)

  await connectToDatabase();

  const db = mongoose.connection;
  const productList = db.collection("products");
  // console.log(productList);

    try {
      const query1 = { $regex: name, $options: "i" };
      const query2 = { $regex: category, $options: "i" };
      const query3 = { $regex: location, $options: "i" };
      
      const promises = [];

      if (name == "" && category == "" && location == "") {
      }

      if (name !== "" && category == "" && location == "") {
        promises.push(Product.find({ title: query1 }));
      }

      if (name !== "" && category !== "" && location == "") {
          const combinedQuery = {
            title: query1,
            category: query2,
          };
          promises.push(Product.find(combinedQuery));
      }

      if (name !== "" && category !== "" && location !== "") {
        const combinedQuery = {
          title: query1,
          category: query2,
          address: query3
        };
        promises.push(Product.find(combinedQuery));
    }

      const [finalTitle, finalCategory, finalAddress] = await Promise.all(promises);

      const finalProduct = []
        .concat(finalTitle || [])
        .concat(finalCategory || [])
        .concat(finalAddress || []);


        console.log(finalProduct.length);

      res.status(200).json({
        message: "All Seller Products Retrieved Successfully",
        Product: finalProduct,
      });
    } catch (error) {
      console.error("Error retrieving products:", error);
      res.status(500).json({ error: "An error occurred" });
    }

});

module.exports = router;