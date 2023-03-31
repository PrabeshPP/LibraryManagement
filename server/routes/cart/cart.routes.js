const express=require("express")
const router=express.Router();

const {addToCart}=require("../../controller/Cart/cartController");
const authMiddleware = require("../../middleware/auth.middleware");

router.route("/add-to-cart").post(authMiddleware,addToCart)

module.exports=router