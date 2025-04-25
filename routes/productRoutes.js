var express = require('express')
var router = express.Router();
var pModel = require('../model/product');
const upload= require('../middleware/multer');
// api to add product details
router.post('/',upload.array("images",5),async(req,res)=>{
    try {
        const imagePaths = req.files.map(file=>file.filename)
        const{pname,price,stock,discription}=req.body;
       const newProduct = new pModel({
        pname,
        price,
        stock,
        discription,
        images:imagePaths
       })
       await newProduct.save()
       res.status(200).send({message:"Product added successfully",product:newProduct})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
})

// to get product
router.get('/',async(req,res)=>{
    try {
        var product = await pModel.find();
        res.status(200).send(product)
    } catch (error) {
     res.status(500).send({message:"Internal server error"})   
    }
})
module.exports= router
