const express=require("express")
const router=express.Router();

const {addToCart,getAllItemFromCart,removeFromCart}=require("../../controller/Cart/cartController");
const authMiddleware = require("../../middleware/auth.middleware");

router.route("/add-to-cart").post(authMiddleware,addToCart)
router.route("/cart-items").get(authMiddleware,getAllItemFromCart)
router.route("/remove/:id").get(authMiddleware,removeFromCart)

module.exports=router