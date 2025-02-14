const express = require("express");
const cors = require("cors")
const aiRoutes = require("./routes/ai.routes")
const app = express();
app.use(express.json())
app.use(cors())
app.use("/ai",aiRoutes)
app.get("/",(req,res)=>{
    res.send("SERVER IS RUNNING PERFECTLY...")
})
module.exports = app