// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//creates express server nad sets up a port
var app = express();
var PORT = process.env.PORT || 8080;

//body parser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//LISTENER
// To start our server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});