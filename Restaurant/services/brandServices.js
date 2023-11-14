const asyncHandler = require('express-async-handler')

const slugify = require('slugify')

const BrandModel=require('../models/brandModel')

const ApiError=require('../utils/apiError')
//des   Add Brand
//route  POST /api/v1/brands
//acc    Admin(private)
exports.addBrand=asyncHandler(async(req,res)=>{
    const {name}=req.body;
  const brand=await BrandModel.create({
        name:name,
        slug:slugify(name),
    });res.status(201).json({data:brand})



}
)
//des   show brand
//route  GET /api/v1/brands
//acc    All(public)
exports.getAllBrands=asyncHandler(async(req,res)=>{
  const Allbrand=await BrandModel.find({}); 
  res.status(200).json({length:Allbrand.length,data:Allbrand}) 
})
//des   show spacificbrand
//route  GET /api/v1/brands/:id
//acc    All(public)
exports.getSpacificBrand=asyncHandler(async(req,res,next)=>{
    const {id}=req.params;
    const brand=await BrandModel.findById(id); 
    if(!brand) 
    {
     return next(new ApiError(`Error There is no brand With this ID ${id}`,404))
        //res.status(404).json({msg:`Error There is no Category With this ID ${id}`}) 

    }
    res.status(200).json({data:brand}) 

  })

//des   update spacificbrand
//route  PUT /api/v1/brands/:id
//acc    Admin(private)
exports.UpdateSpacificBrand=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const brand=await BrandModel.findByIdAndUpdate({_id:id},{name,slug:slugify(name),},{update:true}); 
    if(!brand)
    {
        res.status(404).json({msg:`Error There is no brand With this ID ${id}`}) 

    }
    res.status(200).json({data:brand}) 

  })
 

//des   Delete spacificbrand
//route  Delete /api/v1/brands/:id
//acc    Admin(private)
exports.DeleteSpacificBrand=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const brand=await BrandModel.findByIdAndDelete(id); 
    if(!brand)
    {
        res.status(404).json({msg:`Error There is no brand With this ID ${id}`}) 

    }
    res.status(204).json({msg:`Done...Delete brand With this ID ${id}`}) 

  })  