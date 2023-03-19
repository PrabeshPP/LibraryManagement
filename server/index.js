const express=require("express");
const dotenv=require("dotenv");

const authenticationUserRoute=require("./routes/authentication");
dotenv.config();
const port=process.env.PORT;

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(authenticationUserRoute);

app.listen(port,()=>{
    console.log(`Server running at PORT ${port}`)
})


