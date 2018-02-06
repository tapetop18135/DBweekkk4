var express = require("./config/app.js");
var app = express();
const port =  process.env.PORT || 3000;
app.listen(port,() =>{
    console.log("connect sever port http://localhost:"+port);
});
