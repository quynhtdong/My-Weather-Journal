// Setup empty JS object to act as endpoint for all routes
const projectData = [];
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
app.use(bodyParser.urlencoded({extended: true}));
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get("/", function(req, res){
  console.log("connected");
  // res.send(projectData);
  res.send("hello");
});

// Post Route
app.post("/", function(req, res){

  let newEntry = {
    temp: req.body.temp,
    date: req.body.date,
    userResponse: req.body.response
  };
  projectData.push(newEntry);
  console.log(projectData);
});

// Spin up the server
// Callback to debug
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
