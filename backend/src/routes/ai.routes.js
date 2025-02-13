const express = require("express")
const aicontroller = require("../controllers/ai.controller")
const router = express.Router()

router.get("/response",aicontroller.getResponse)
router.get("/",(req,res)=>{
    res.send("ai router is working perfectly...")
})
module.exports = router