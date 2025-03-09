require('dotenv').config();
const app = require("./src/app");
app.listen(3000 ,()=>{
    console.log("code is running in port 3000")
})