const express=require("express");
const router=express.Router();
const authMiddleware=require("../../middleware/auth.middleware");
const {createBook}=require("../../controller/book/book.controller");

//This is a starting for CRUD operation

router.route("/create-book").get(createBook);





module.exports=router;