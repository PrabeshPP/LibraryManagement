const express=require("express")
const router=express.Router();

const {createUser,authenticateUser, logoutUser}=require("../controller/auth");

router.route("/signup").post(createUser);
router.route("/login").post(authenticateUser);
router.route("/logout").post(logoutUser)


module.exports=router