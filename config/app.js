var express = require("express");
var morgan = require("morgan");
var jade = require("jade");
var bodyParser = require("body-parser");

var app = express();


app.use(morgan("dev"));
app.use(express.static('public'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.set("views","./app/views");
app.set("view engine","jade");

module.exports = function (){

    var routesAdmin = require("../app/routes/route_server_admin.js")(app); 

    return app;
} 