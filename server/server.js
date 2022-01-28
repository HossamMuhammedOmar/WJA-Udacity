// import the express framework (module)
const express = require("express");
// import the body-parser module
const bodyParser = require("body-parser");
// import the Cors module
const cors = require("cors");
// Setup a port
const port = 8080;

// Start up an instance of app
const app = express();

// Create a local server
app.listen(port, startServer);

// Helper Method for listen to the server
function startServer() {
  console.log("Test our server!");
}
