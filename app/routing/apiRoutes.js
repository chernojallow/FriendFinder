
var  friendData = require("../data/friends");

module.exports = function(app){
    // API GET Request
    app.get("/api/friends", function(req, res){
     res.json(friendData);
    });

    app.post("/api/friends", function(req, res){

        var arrayScore =[];
        var count = 0;
        var match =0;
        var input = req.body;


      ////  console.log('input',  input);


        console.log("=============================");
        var userInput = input.scores;
       ////  console.log("userresponses",  userResponses);

       //// Loop through all friendData
      for (var i = 0; i < friendData.length; i++){
         
        var difference = 0;

        ////Compare difference for each question
       for( var j = 0; i < userInput.length; j++){
       difference += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userInput[j])));
          //console.log("userinput", userInput[j]);
      }

       arrayScore.push(difference);
       //console.log("difference" + difference);
     }

    // find best match 
    for(var i =0; i< arrayScore.length; i++){
         if(arrayScore[i] <= arrayScore[match]) {
         match = i;
        }
    }

      // return match 
     res.json(friendData[bestMatch]);
     
     // if (friendData.length < 50) {
           friendData.push(input);
           res.json(true);
     //  } 
     //  else{
       //    console.log("Is full");
    //  }

    });
};