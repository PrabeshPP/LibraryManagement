const express=require("express")
const router=express.Router();

const {createUser,authenticateUser}=require("../controller/auth");

router.route("/signup").post(createUser);
router.route("/login").post(authenticateUser);


module.exports=router