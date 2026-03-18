const express = require("express");
const server = express();

// First route handler for "/"
// Acts like middleware because it uses 'next()'
server.get("/", (req, res, next) => {
  console.log("First middleware Hit"); // Log when this route is accessed
  next(); // Pass control to the next matching route handler
});

// Second route handler for the same "/"
// This will execute after the first one calls next()
server.get("/", (req, res) => {
  res.send("Welcome to Express Server with Middleware"); 
  // Sends response to client and ends request-response cycle
});

server.listen(3100);