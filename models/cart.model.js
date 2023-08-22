const mongoose=require("mongoose");
const cartSchema=mongoose.Schema({
    image:String,
    type:String,
    Brand:String,
    price:String,
    for:String,
    des:String,
    category:String,
    productId:String
});

const cartModel=mongoose.model("carts",cartSchema);

module.exports={
    cartModel
}