const mongoose = require('mongoose');

const { Schema } = mongoose;

const BrandSchema = new Schema({
  name: {
    type: String,
    required: [true, "Brand is required"],
    unique: [true, "Brand has to be unique"],
    minlength: [3, 'Too short'],
    maxlength: [30, 'Too long']
  },
  slug: {
    type: String,
    lowercase: true
  },
  img: String
}, { timestamps: true });


const BrandModel = mongoose.model("Brand", BrandSchema);
module.exports = BrandModel;