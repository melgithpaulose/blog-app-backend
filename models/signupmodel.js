const mongoose=require("mongoose")

const signupschema=new mongoose.Schema(
    {
        name:String,
        age:String,
        mobileno:String,
        address:String,
        pincode:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("users",signupschema)