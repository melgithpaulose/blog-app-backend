const express=require("express")

const signupmodel=require("../models/signupmodel")

const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

const router=express.Router()

router.post("/signup",async(req,res)=>{

    let {data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let users=new signupmodel(data)
            let result=users.save()
            res.json({
                status:"success"
            })
        }
    ) 
})

module.exports=router