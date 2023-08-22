const express=require("express");
const {ProductMenMOdel}=require("../models/product.model.men");
const {ProductWomenMOdel}=require("../models/product.model.women");
const {ProductgirlMOdel}=require("../models/product.model.girls")
const {ProductboysMOdel}=require("../models/product.model.boys")
const {CartModel}=require("../models/cart.model")
const { authentication}=require("../middleware/user.authentication");
const productRoute=express.Router();
const cors=require('cors');
const { loginRoute } = require("./login.router");
const { response } = require("express");
loginRoute.use(cors())
// productRoute.use(authentication)

productRoute.post("/men/shoes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductMenMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":error})
    }
});
productRoute.post("/men/clothes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductMenMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
})

productRoute.post("/women/shoes/",async(req,res)=>{
    try {
        let obj=req.body;
       
        let data=await ProductWomenMOdel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});

productRoute.post("/women/clothes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductWomenMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/boys/shoes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductboysMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/boys/clothes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductboysMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/girls/shoes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductgirlMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/girls/clothes/",async(req,res)=>{
    try {
        let obj=req.body;
        let data=await ProductgirlMOdel.find(obj);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
//Sorting

productRoute.get("/men/clothes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/women/clothes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductWomenMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductWomenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/boys/clothes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductboysMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductboysMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/boys/shoes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductboysMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductboysMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/boys/type/shoes",async(req,res)=>{
    try {

        if(req.query.sort=="asc"){

            var data=await ProductboysMOdel.find(req.body);
           
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductboysMOdel.find(req.body);
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/girls/type/shoes",async(req,res)=>{
    try {

        if(req.query.sort=="asc"){

            var data=await ProductgirlMOdel.find(req.body);
           
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductgirlMOdel.find(req.body);
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/men/type/shoes",async(req,res)=>{
    try {

        if(req.query.sort=="asc"){

            var data=await ProductMenMOdel.find(req.body);
           
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.find(req.body);
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.post("/women/type/shoes",async(req,res)=>{
    try {

        if(req.query.sort=="asc"){

            var data=await ProductWomenMOdel.find(req.body);
           
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductWomenMOdel.find(req.body);
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});

productRoute.get("/girls/shoes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductgirlMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductgirlMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/Men/shoes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductMenMOdel.find(); 
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductMenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/women/shoes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductWomenMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductWomenMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
productRoute.get("/boys/shoes",async(req,res)=>{
    try {
        if(req.query.sort=="asc"){
            var data=await ProductboysMOdel.find();
            data.sort((a,b)=> a.price-b.price);
        }else if(req.query.sort=="desc"){
            var data=await ProductboysMOdel.find();
            data.sort((a,b)=> b.price-a.price);
        };
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"})
    }
});
//Cart 



module.exports={
    productRoute
}


