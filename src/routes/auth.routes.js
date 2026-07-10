const express = require('express')
const authController = require("../controllers/auth.controllers")


const router = express.Router()

router.post("/register" , authController.registerUser)

router.get("/test", (req,res)=>{
    console.log("cookies:" , req.cookies)

    res.json({
        messgae:"the route",
        cookies: req.cookies
    })
})


module.exports = router