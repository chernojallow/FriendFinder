
var appData = require("app/data/friends");

module.exports = function(app){
    // API GET Request
    app.get("/api/friends", function(req, res){
     res.json(appData);
    });

    app.post("api/friends", function(req, res){

    });
}