const generateContent = require("../services/ai.service")

module.exports.getResponse = async (req,res)=>{
    const prompt = req.query.prompt
    if(!prompt){
        return res.status(401).json({message:"Prompt is Required!"})
    }
    const response = await generateContent(prompt)
    res.send(response)
}