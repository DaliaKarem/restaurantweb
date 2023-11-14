const asyncHandler = require('express-async-handler')
const slugify = require('slugify')

const CateModel=require('../models/categoryModel')
const ApiError=require('../utils/apiError')
//des   Add Category
//route  POST /api/v1/categories
//acc    Admin(private)
exports.addCategory=asyncHandler(async(req,res)=>{
    const name=req.body.name;
  const category=await CateModel.create({
        name:name,
        slug:slugify(name),
    });res.status(201).json({data:category})



}
)
//des   show Category
//route  GET /api/v1/categories
//acc    All(public)
exports.getAllCategories=asyncHandler(async(req,res)=>{
  const AllCate=await CateModel.find({}); 
  res.status(200).json({length:AllCate.length,data:AllCate}) 
})
//des   show spacificCategory
//route  GET /api/v1/categories/:id
//acc    All(public)
exports.getSpacificCategory=asyncHandler(async(req,res,next)=>{
    const {id}=req.params;
    const Cate=await CateModel.findById(id); 
    if(!Cate)
    {
     return next(new ApiError(`Error There is no Category With this ID ${id}`,404))
        //res.status(404).json({msg:`Error There is no Category With this ID ${id}`}) 

    }
    res.status(200).json({data:Cate}) 

  })

//des   update spacificCategory
//route  PUT /api/v1/categories/:id
//acc    Admin(private)
exports.UpdateSpacificCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const Cate=await CateModel.findByIdAndUpdate({_id:id},{name,slug:slugify(name),},{update:true}); 
    if(!Cate)
    {
        res.status(404).json({msg:`Error There is no Category With this ID ${id}`}) 

    }
    res.status(200).json({data:Cate}) 

  })
 

//des   Delete spacificCategory
//route  Delete /api/v1/categories/:id
//acc    Admin(private)
exports.DeleteSpacificCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const Cate=await CateModel.findByIdAndDelete(id); 
    if(!Cate)
    {
        res.status(404).json({msg:`Error There is no Category With this ID ${id}`}) 

    }
    res.status(204).json({msg:`Done...Delete Category With this ID ${id}`}) 

  })  