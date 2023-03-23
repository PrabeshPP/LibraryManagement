const express=require("express");
const router=express.Router();
const authMiddleware=require("../../middleware/auth.middleware");
const {createBook}=require("../../controller/book/book.controller");
const {upload,uploadImage}=require("../../middleware/imageUploader");

//This is a starting for CRUD operation

router.route("/create-book").post(upload.single('image'),uploadImage,createBook);





module.exports=router;