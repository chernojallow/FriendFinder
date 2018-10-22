
//require the friends data file
var friendData = require("../data/friends");

//Routes
module.exports = function (app) {
    // API GET Request
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //API POST Request
    app.post("/api/friends", function (req, res) {
         
        // variables to user's survey and parse it
        var userInput = req.body;
        var diff = 50;
        var match = 0;

        // Looping through all the friend possibilities in the database
        for (i = 0; i < friendData.length; i++) {

            var difference = 0;
            console.log("==================");
            console.log(friendData[i]);

         // Loop through all the scores of each friend
            for (j = 0; j < userInput.scores.length; j++) {
                 
                // Here we calculate the difference between scores and sum them difference
                difference += Math.abs(friendData[i].scores[j] - userInput.scores[j]);
    
            }

            // Reset the bestMatch to the new friend
             if (difference < diff){
                 match = i;
                 diff = difference;
             }
        }
   
        // save the data to the database
        friendData.push(userInput);

        // Return a JSON with the user's bestMatch
        res.json(friendData[match]);

      
       
    });
}


