const express = require("express")
const jwt = require("jsonwebtoken")
const userModel = require("../models/User.model")

const router = express.Router()
router.post("/Create", async (req, res) => {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized user"
        })
    }

    try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET)
         const user = await userModel.findOne({
            _id: decoded.id
         })
        console.log(user)
    } catch (error) {
        return res.status(401).json({message: "token unvalid"})
    }

    res.send("Post created successfully")
})

module.exports = router