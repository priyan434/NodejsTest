const express=require("express")
const { getVendorUsers } = require("../Controllers/controllers")
const router=express.Router()
router.get("/getVendorUsers",getVendorUsers)
module.exports=router