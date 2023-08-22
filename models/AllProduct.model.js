const mongoose=require("mongoose");
let AllProductSchema=mongoose.Schema({
    image:String,
    type:String,
    Brand:String,
    price:String,
    for:String,
    des:String,
    category:String,
    productId:String
});
let AllProductModel=mongoose.model("AlltData",AllProductSchema);

module.exports={
    AllProductModel
}