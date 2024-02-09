const mongoose=require("mongoose")
const router = require("../controllers/signuprouter")
const postschema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"users"
        },
        post:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            required:true,
            default:Date.now
        }
    }
)
module.exports=mongoose.model("globpost",postschema)