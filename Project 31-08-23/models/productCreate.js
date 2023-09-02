const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    unique: true,
    type: String,
    required: true,
  },
  adType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  adOption: {
    type: String,
    required: true,
  },
  paymentOption: {
    type: String,
    required: true,
  },
  addedAt: {
    type: Date,
    required: true,
  }
});

const Product = mongoose.model("electronicsProducts", productSchema);

module.exports = Product;
