const mongoose=require("mongoose");
const ProductSchema=mongoose.Schema({
    image:String,
    type:String,
    Brand:String,
    price:String,
    For:String,
    des:String,
    Rating:String,
    category:String,
    color:{type:String, require:true}
});

const ProductMenMOdel=mongoose.model("Productofmen",ProductSchema);

module.exports={
    ProductMenMOdel
}