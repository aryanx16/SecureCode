const generateContent = require("../services/ai.service")

module.exports.getResponse = async (req,res)=>{
    const prompt = req.body.code
    if(!prompt){
        return res.status(401).json({message:"Prompt is Required!"})
    }
    console.log("Prompt received")
    const response = await generateContent(prompt)
    res.send(response)
}