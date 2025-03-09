const ai_Responce = require("../services/ai.service")
module.exports.getReview = async (req,res)=>{
    const code =req.body.code || req.query.code;
    console.log(code);
    if(!code){
        return res.status(400).send("No Prompt")
    }
    const response = await ai_Responce(code);
    res.send(response);
}


////////

