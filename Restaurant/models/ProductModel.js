const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product is required"],
    minlength: [2, 'Too short'],
    maxlength: [50, 'Too long']
  },
  slug: {
    type: String,
    lowercase: true
  },
  description:{
    type: String,
    required: [true, "Product is required"],
    minlength: [10, 'Too short'],
  },
  quantity: {
    type: Number,
    
    required: [true, "Product quantity is required"]
  },
  solid: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    max:[300000,"too long"],
  },
  price_Dis:{
    type: Number,
  },
  first_image:{
    type: String,
    required: [true, "Product image is required"],
  },
  imgs: [String],
  category:{
    type:ObjectId,
    refere:'Category',
    required: [true, "product must belong to Category "],
  },
  subCategory:[{
    type:ObjectId,
    refere:'SubCategory',
  }],
  brand:{
    type:ObjectId,
    refere:'Brand',
  },
  Rating:{
    type:Number,
    min:1,
    max:5,
  },
  numOfRating:{
    type:Number,
    default:0,
  },
}, { timestamps: true });


const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;