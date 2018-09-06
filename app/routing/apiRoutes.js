
var  friendData = require("../data/friends");

module.exports = function(app){
    // API GET Request
    app.get("/api/friends", function(req, res){
     res.json(friendData);
    });

    app.post("/api/friends", function(req, res){
       
        var input = req.body;
      //  console.log('input',  input);
        console.log("=============================");
        var userInput = input.scores;
       // console.log("userresponses",  userResponses);

       // Loop through all friendData
       for (var i = 0; i < friendData.length; i++){
         
        var difference = 0;

        //Compare difference for each question
       for( var j = 0; i < userInput.length; j++){
           difference += Math.abs(friendData[i].scores[j] - userInput[j]);
          //console.log("userinput", userInput[j]);
       }
       console.log("difference" + difference);
    }
     
      if (friendData.length < 50) {
             friendData.push(input);
          res.json(true);
       } 
       else{
           console.log("Is full");
      }

    });
};