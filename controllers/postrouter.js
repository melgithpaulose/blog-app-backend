const express=require("express")
const postmodel=require("../models/postmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    console.log(data)
    let post=new postmodel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await postmodel.find()
    .populate("userId","name address -_id")
    .exec()
    res.json(data)
})

module.exports=router