

var friendData = require("../data/friends");

module.exports = function (app) {
    // API GET Request
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {

        var userInput = req.body;
        var diff = 50;
        var match = 0;

        for (i = 0; i < friendData.length; i++) {

            var difference = 0;
            console.log("==================");
            console.log(friendData[i]);

            for (j = 0; j < userInput.scores.length; j++) {

                difference += Math.abs(friendData[i].scores[j] - userInput.scores[j]);
    
            }

             if (difference < diff){
                 match = i;
                 diff = difference;
             }
        }
   
        friendData.push(userInput);
        res.json(friendData[match]);

      
        //res.json(friendData);
    });
}
































