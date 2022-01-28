// Create the projectData Object
projectData = {};

// import modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Setup a port
const port = 8080;

// Start up an instance of app
const app = express();

// configure the Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize the main project folder
app.use(express.static("website"));

// Create a local server
app.listen(port, startServer);

// Helper Method for listen to the server
function startServer() {
  console.log("Test our server!");
}

// GET Route
app.get("/all", getProjectData);

// Helper Method for GET Route
function getProjectData(req, res) {
  res.send(projectData);
}

// POST Route
app.post("/addZipCode", addWeatherData);

function addWeatherData(req, res) {
  projectData.temperature = req.body.temperature;
  projectData.date = req.body.date;
  projectData.userResponse = req.body.userResponse;
  res.send(projectData);
}
