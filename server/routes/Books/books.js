const express=require("express");
const router=express.Router();
const authMiddleware=require("../../middleware/auth.middleware");
const {createBook, getAllBooks}=require("../../controller/book/book.controller");
const {upload,uploadImage}=require("../../middleware/imageUploader");
const {checkAdmin}=require("../../middleware/checkAdmin.middleware");

//This is a starting for CRUD operation

router.route("/create-book").post(authMiddleware,checkAdmin,upload.single('image'),uploadImage,createBook);
router.route("/books").get(getAllBooks)





module.exports=router;