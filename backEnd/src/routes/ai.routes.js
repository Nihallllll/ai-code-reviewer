const express =require("express");
const { getReview } = require("../controller/ai.controller");

const router = express.Router();


router.post("/get-review",getReview);
console.log("ai.router")
module.exports=router;