const express=require("express")

const signupmodel=require("../models/signupmodel")

const router=express.Router()

router.post("/signup",async(req,res)=>{
    let data=req.body
    let users=new signupmodel(data)
    let result=await users.save()
    res.json({
        status:"success"
    })
})

module.exports=router