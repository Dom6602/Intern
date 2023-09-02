const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const connectToDatabase = require("../db_connector");

const Product = require("../models/productCreate");

router.get("/", async (req, res) => {
  await connectToDatabase();

  const db = mongoose.connection;
  const productList = db.collection("products");
  // console.log(productList);

  const product = await Product.find();
  // console.log(product);


  const laptops = await Product.countDocuments({ category: "Laptop" });
  const iphone = await Product.countDocuments({ category: "iphone" });
  const microsoft = await Product.countDocuments({ category: "Microsoft" });
  const monitors = await Product.countDocuments({ category: "Monitors" });
  // console.log(Monitors);

  const newyork = await Product.countDocuments({ address: "New York" });
  const newjersy = await Product.countDocuments({ address: "New Jersy" });
  const florida = await Product.countDocuments({ address: "Florida" });
  const california = await Product.countDocuments({ address: "California" });
  const texas = await Product.countDocuments({ address: "Texas" });
  const alaska = await Product.countDocuments({ address: "Alaska" });

  sortDate = await Product.find().sort({ addedAt: -1 })
  // console.log(await Product.find().sort(sortCriteria))
  sortDecPrice = await Product.find().sort({ price: 1 })
  sortIncPrice = await Product.find().sort({ price: -1 })

 
  res
    .status(200)
    .json({
      message: "All Seller Products Retrieved Successfully",
      Products: product,
      Laptops: laptops,
      Iphone: iphone,
      Microsoft: microsoft,
      Monitors: monitors,
      Newyork: newyork,
      Newjersy: newjersy,
      Florida: florida,
      California: california,
      Texas: texas,
      Alaska: alaska,
      RecentItems: sortDate,
      LowestPrice: sortDecPrice,
      HighestPrice: sortIncPrice
    });
});





router.post("/", async (req, res) => {

  let { minPrice, maxPrice } = req.body

  console.log(minPrice, maxPrice);

  await connectToDatabase();

  const db = mongoose.connection;
  const productList = db.collection("products");
  // console.log(productList);

  const product = await Product.find();
  // console.log(product);


  const laptops = await Product.countDocuments({ category: "Laptop" });
  const iphone = await Product.countDocuments({ category: "iphone" });
  const microsoft = await Product.countDocuments({ category: "Microsoft" });
  const monitors = await Product.countDocuments({ category: "Monitors" });
  // console.log(Monitors);

  const newyork = await Product.countDocuments({ address: "New York" });
  const newjersy = await Product.countDocuments({ address: "New Jersy" });
  const florida = await Product.countDocuments({ address: "Florida" });
  const california = await Product.countDocuments({ address: "California" });
  const texas = await Product.countDocuments({ address: "Texas" });
  const alaska = await Product.countDocuments({ address: "Alaska" });

  sortDate = await Product.find().sort({ addedAt: -1 })
  // console.log(await Product.find().sort(sortCriteria))
  sortDecPrice = await Product.find().sort({ price: 1 })
  sortIncPrice = await Product.find().sort({ price: -1 })


  const priceRange = await Product.find().sort({ price: 1 })
  const finalRangeProducts = []
  priceRange.forEach(product => {
    const productPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
    
    if (productPrice >= minPrice && productPrice <= maxPrice) {
      finalRangeProducts.push(product);
    }
  })
  console.log(finalRangeProducts.length)

 
  res
    .status(200)
    .json({
      message: "All Seller Products Retrieved Successfully",
      Products: product,
      Laptops: laptops,
      Iphone: iphone,
      Microsoft: microsoft,
      Monitors: monitors,
      Newyork: newyork,
      Newjersy: newjersy,
      Florida: florida,
      California: california,
      Texas: texas,
      Alaska: alaska,
      RecentItems: sortDate,
      LowestPrice: sortDecPrice,
      HighestPrice: sortIncPrice,
      PriceRange: priceRange,
      FinalRangeProduct: finalRangeProducts
    });

});

module.exports = router;
