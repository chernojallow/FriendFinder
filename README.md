# Friend Finder - Node and Express Servers

 Deployed on Heroku : [Friend Finder!]( https://cherno-friend-finder.herokuapp.com/) 

This application will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with best overall match.

# Technologies used:
The application uses Express to handle routing

The server.js file uses the npm packages: express, body-parser, path.

The html-routes.js file should include two routes:

A GET Route to /survey which displays the survey page.
A USE route that leads to home.html which displays the home page.
The api-routes.js file includes two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
A POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
Compatibility will be determined based on the following.

Each user's results is converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

Then will compare the difference between the user's scores against other users' scores, question by question. Then will add up the differences to calculate the totalDifference.

Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5
The person with the closest match will be the one with the "least" amount of difference.

Once the closest match has been determined, it will display the result back to the user in the form of a modal pop-up.The modal should display both the name and picture of the closest match.

