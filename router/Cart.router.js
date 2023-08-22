const { ProductMenMOdel } = require("../models/product.model.men");
const { ProductWomenMOdel } = require("../models/product.model.women");
const { ProductgirlMOdel } = require("../models/product.model.girls");
const { ProductboysMOdel } = require("../models/product.model.boys");
const { cartModel } = require("../models/cart.model");
const {AllProductModel}=require("../models/AllProduct.model")
const CartRouter = require("express").Router();

CartRouter.post("/add/AllData", async (req, res) => {
  try {
    const mendata = await ProductMenMOdel.find();
    let firstdata = mendata.map((item) => {
      let obj = {
        image: item.image,
        type: item.type,
        Brand: item.Brand,
        price: item.price,
        for: item.for,
        des: item.des,
        category: item.category,
        productId:item._id
      };
      return obj
    });
    const womendata = await ProductWomenMOdel.find();
    let seconddata = womendata.map((item) => {
      let obj = {
        image: item.image,
        type: item.type,
        Brand: item.Brand,
        price: item.price,
        for: item.for,
        des: item.des,
        category: item.category,
        productId:item._id
      };
      return obj
    });
    const girldata = await ProductgirlMOdel.find();
    let thirdddata = girldata.map((item) => {
      let obj = {
        image: item.image,
        type: item.type,
        Brand: item.Brand,
        price: item.price,
        for: item.for,
        des: item.des,
        category: item.category, 
        productId:item._id

      };
      return obj
    });
    const boydata = await ProductboysMOdel.find();
    let fourthdata = boydata.map((item) => {
      let obj = {
        image: item.image,
        type: item.type,
        Brand: item.Brand,
        price: item.price,
        for: item.for,
        des: item.des,
        category: item.category,
        productId:item._id
      };
      return obj
    });
    const AllData=[...firstdata,...fourthdata,...thirdddata,...seconddata];
    const postAlldata=await AllProductModel.insertMany(AllData);
    res.status(201).send(postAlldata);
  } catch (error) {
    console.log(error);
    res.send({ msg: "something went wrong" });
  }
});

CartRouter.post("/add/cart", async (req, res) => {
  try {
    let { id, userid } = req.body;
    let data = await AllProductModel.find({ productId: id });
    data = data[0];
    let checkForExist=await cartModel.find({productId: id });
    if(checkForExist.length!=0){
        return res.status(201).send({"msg":"already exist"})
    }else{
        let { image, type, Brand, price, des, category,productId } = data;
        const CartObj={
            image,
            type,
            Brand,
            price,
            des,
            category,
            productId,
          }
        let cartdata = cartModel(CartObj);
        await cartdata.save();
        console.log(cartdata)
        res.send({ msg: "Your item has been added in to bag" });
    }
   
  } catch (error) {
    console.log(error);
    res.send({ msg: "something went wrong" });
  }
});


CartRouter.delete("/delete/cartData/:id", async (req, res) => {
  try {
    let id = req.params.id;

    await cartModel.findByIdAndDelete({ _id: id });
    let data = await cartModel.find();
    res.send({ msg: "Your item has been removed  to bag", data });
  } catch (error) {
    console.log(error);
    res.send({ msg: "something went wrong" });
  }
});

CartRouter.get("/get/cartdData/", async (req, res) => {
  try {
    let id = req.body.userid;
    let data = await cartModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send({ msg: "something went wrong" });
  }
});

module.exports = {
  CartRouter
};
