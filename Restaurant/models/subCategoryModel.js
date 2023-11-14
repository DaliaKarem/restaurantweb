const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const { Schema } = mongoose;
const SubCategSchema=new Schema({
    name:{
        type: String,
        trim:true,
        required: [true, "Category is required"],
        unique: [true, "SubCategory must to be unique"],
        minlength: [2, 'Too short'],
        maxlength: [30, 'Too long']
      },
      slug: {
        type: String,
        lowercase: true
      },
      img: String,
      category:{
        type:ObjectId,
        refere:'Category',
        required: [true, "subcategory must belong to Category "],

      }
  },{timestamps:true}
  )

  const subCateModel = mongoose.model("SubCategory", SubCategSchema);
  module.exports = subCateModel;
