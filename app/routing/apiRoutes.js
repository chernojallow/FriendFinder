

var friendData = require("../data/friends");

module.exports = function (app) {
    // API GET Request
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {

        var userInput = req.body;
       // var arrayScore = [];
        var diff = 50;
        var match = 0;

        for (i = 0; i < friendData.length; i++) {

            var difference = 0;
            console.log("==================");
            console.log(friendData[i]);

            for (j = 0; j < userInput.scores.length; j++) {

                difference += Math.abs(friendData[i].scores[j] - userInput.scores[j]);
                //   console.log("Userinput:" , userInput[j]);
                //  console.log('====================');
                //  console.log("difference:", difference);
                //  console.log("====================");

                //  console.log("Friend Data:", friendData[i].scores[j]);
                // console.log('========================');

                // console.log("friend:", friendData[i]);


            }

             if (difference < diff){
                 match = i;
                 diff = difference;
             }

           // arrayScore.push(difference);
        }

      //  for (var i = 0; i < arrayScore.length; i++) {
          //  if (arrayScore[i] <= arrayScore[match]) {
           //     match = i;
          //  }
      //  }

        
        friendData.push(userInput);
        res.json(friendData[match]);

      
        //res.json(friendData);
    });
}







/*

app.post("/api/friends", function (req, res) {

    var arrayScore = [];
    var match = 0;
    // var input = req.body;
    var userInput = req.body.scores;

    ////  console.log('input',  input);
    //console.log("=============================");
    ////  console.log("userresponses",  userResponses);
    // Loop through all friendData

    for (var i = 0; i < friendData.length; i++) {
        var difference = 0;

        ////Compare difference for each question
        for (var j = 0; i < userInput.length; j++) {
            difference += Math.abs(friendData[i].scores[j] - userInput[j]);
            //console.log("userinput", userInput[j]);
        }

        arrayScore.push(difference);
        //console.log("difference" + difference);
    }

    // find best match 
    for (var i = 0; i < arrayScore.length; i++) {
        if (arrayScore[i] <= arrayScore[match]) {
            match = i;
        }
    }

    // return match 
    res.json(friendData[match]);

    // if (friendData.length < 50) {
    friendData.push(req.body);
    res.json(true);

    //  } 
    //  else{
    //    console.log("Is full");
    //  }

});
};

*/


























