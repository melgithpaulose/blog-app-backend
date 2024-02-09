const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const signuprouter=require("./controllers/signuprouter")
const postrouter=require("./controllers/postrouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://melgith2002:melgith2002@cluster0.vqeinn7.mongodb.net/blogDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/user",signuprouter)
app.use("/api/post",postrouter)

app.listen(2005,()=>{
    console.log("localhost running")
})