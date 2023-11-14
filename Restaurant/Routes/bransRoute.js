const express=require('express');

const {addBrand,UpdateSpacificBrand,getAllBrands,getSpacificBrand,DeleteSpacificBrand}=require('../services/brandServices');
const {validateAddbrand,validateDeletebrand,validateSpecificbrand,validateUpdatebrand}=require('../utils/validators/bransvalidator');
const SubCategoriesRoute=require('./subCategoryRoute')//if url contain /:id:sub go to subCate Route

const router=express.Router()
//router.post("/",addCategory)
router.route("/").post(validateAddbrand,addBrand).get(getAllBrands)
router.route("/:id").get(validateSpecificbrand,getSpacificBrand).put(validateUpdatebrand,UpdateSpacificBrand).delete(validateDeletebrand,DeleteSpacificBrand)
//:id/Subcategories  to get all categories from categoriesID
router.use("/:categoryID/Subcategories",SubCategoriesRoute)


//router.get("/",getAllCategories)
module.exports=router

