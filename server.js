// Setup empty JS object to act as endpoint for all routes
const projectData = {};
// Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Dependencies */
const https = require("https");
const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get("/get", function(req, res){
  res.send(projectData);
});

// Post Route
app.post("/", function(req, res){
    projectData.temp = req.body.temp;
    projectData.date = req.body.date;
    projectData.userResponse = req.body.userResponse;

  console.log(projectData);
  return projectData;
});

// Spin up the server
// Callback to debug
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
