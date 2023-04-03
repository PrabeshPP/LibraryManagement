const express=require("express");
const router=express.Router();
const {createAdmin,authenticateAdmin}=require("../../controller/admin/auth");

router.route("/signup").post(createAdmin);
router.route("/login").post(authenticateAdmin)


module.exports=router