const express =require("express");
const router = require("./routes/ai.routes");
const cors = require('cors')
const app =express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.json("ha bhai")
})
app.use('/ai',router)
module.exports=app;