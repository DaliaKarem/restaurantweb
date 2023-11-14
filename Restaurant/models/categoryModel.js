const mongoose = require('mongoose');

const { Schema } = mongoose;

const CateSchema = new Schema({
  name: {
    type: String,
    required: [true, "Category is required"],
    unique: [true, "Category has to be unique"],
    minlength: [3, 'Too short'],
    maxlength: [30, 'Too long']
  },
  slug: {
    type: String,
    lowercase: true
  },
  img: String
}, { timestamps: true });


const CateModel = mongoose.model("Category", CateSchema);
module.exports = CateModel;