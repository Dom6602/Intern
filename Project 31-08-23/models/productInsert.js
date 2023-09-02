
const Product = require("../models/productCreate");

const router = require('../routes/addListing')

const insertData = async (productDetails) => {
  // console.log(productDetails)

  try {
    const newProduct = new Product({
      title: productDetails.Title,
      adType: productDetails.AdType,
      description: productDetails.Description,
      category: productDetails.Category,
      price: productDetails.Price,
      productImage: productDetails.ProductImage,
      name: productDetails.Name,
      number: productDetails.Number,
      email: productDetails.Email,
      address: productDetails.Address,
      adOption: productDetails.AdOption,
      paymentOption: productDetails.PaymentOption,
      addedAt: productDetails.AddedAt
    });

    await newProduct.save();
    console.log("New product saved to the database");
  } catch (error) {
    console.error("Error saving product:", error);
  }
};

module.exports = insertData;
