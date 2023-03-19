const express=require("express");
const router=express.Router();
const authMiddleware=require("../../middleware/auth.middleware");

//This is a starting for CRUD operation

router.route("/").get(authMiddleware,(req,res)=>{
    res.status(200);
    res.json({"message":"You have received all the books."})
})





module.exports=router;