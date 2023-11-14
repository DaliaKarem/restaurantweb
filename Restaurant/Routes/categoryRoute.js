const express=require('express');

const {addCategory,getAllCategories,UpdateSpacificCategory,getSpacificCategory,DeleteSpacificCategory}=require('../services/categoryServices');
const {validateSpecificCateg,validateAddCateg,validateDeleteCateg,validateUpdateCateg}=require('../utils/validators/Categoryvalidator');
const SubCategoriesRoute=require('./subCategoryRoute')//if url contain /:id:sub go to subCate Route

const router=express.Router()
//router.post("/",addCategory)
router.route("/").post(validateAddCateg,addCategory).get(getAllCategories)
router.route("/:id").get(validateSpecificCateg,getSpacificCategory).put(validateUpdateCateg,UpdateSpacificCategory).delete(validateDeleteCateg,DeleteSpacificCategory)
//:id/Subcategories  to get all categories from categoriesID
router.use("/:categoryID/Subcategories",SubCategoriesRoute)


//router.get("/",getAllCategories)
module.exports=router

