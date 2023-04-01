const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors")

const authenticationUserRoute=require("./routes/authentication");
const authMiddleware=require("./middleware/auth.middleware");
const bookRouter=require("./routes/Books/books");
const adminRouter=require("./routes/admin/adminAuthentication");
const cartRouter=require("./routes/cart/cart.routes");


dotenv.config();
const port=process.env.PORT;

const app=express();

//cross-site
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(authenticationUserRoute);
app.use(bookRouter);
app.use("/admin",adminRouter)
app.use(cartRouter)

app.use("/res",authMiddleware,(req,res)=>{
    
    res.status(200);
    res.json({"message":"Looks Like you Fucked up Something!"})
})

app.listen(port,()=>{
    console.log(`Server running at PORT ${port}`)
})


