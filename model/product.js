var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    pname:String,
    price:Number,
    stock:Number,
    discription:String,
    images:[String]
})

var productModel = mongoose.model("product",productSchema);
module.exports = productModel