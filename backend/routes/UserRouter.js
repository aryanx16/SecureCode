const express = require("express")
const UserRouter = express()

UserRouter.get("/",(req,res)=>{
    res.send("User router working perfectly")
})

module.exports = UserRouter