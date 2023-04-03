const express=require("express")
const authMiddleware = require("../../middleware/auth.middleware")
const { checkAdmin } = require("../../middleware/checkAdmin.middleware")
const { getAllUser } = require("../../controller/user/user.controller")
const router=express.Router()

router.route("/get-all-users").get(authMiddleware,checkAdmin,getAllUser);

module.exports=router