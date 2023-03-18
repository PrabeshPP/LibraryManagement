const express=require("express");
const dotenv=require("dotenv");

dotenv.config();
const port=process.env.PORT;

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/",(req,res)=>{
    res.json({"message":"This is a library management!"})
})

app.listen(port,()=>{
    console.log(`Server running at PORT ${port}`)
})


