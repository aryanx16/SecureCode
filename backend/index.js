const express = require("express");
const UserRouter = require("./routes/UserRouter");
const app = express();
app.listen(5000,()=>{
    console.log("Listening on port 5000...")
})
app.use("/user",UserRouter)