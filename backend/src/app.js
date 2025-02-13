const express = require("express");
const aiRoutes = require("./routes/ai.routes")
const app = express();
app.use(express.json())
app.use("/ai",aiRoutes)
app.get("/",(req,res)=>{
    res.send("SERVER IS RUNNING PERFECTLY...")
})
module.exports = app