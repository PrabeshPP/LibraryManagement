const express=require("express");
const dotenv=require("dotenv");

const authenticationUserRoute=require("./routes/authentication");
const authMiddleware=require("./middleware/auth.middleware");
dotenv.config();
const port=process.env.PORT;

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(authenticationUserRoute);
app.use("/res",authMiddleware,(req,res)=>{
    res.status(200);
    res.json({"message":"Looks Like you Fucked up Something!"})
})

app.listen(port,()=>{
    console.log(`Server running at PORT ${port}`)
})


