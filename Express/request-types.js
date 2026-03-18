//IMplementing Different Types of Http Requests
//Implementing http headers and status codes.

const express = require("express");
const server = express();

//get request
server.get("/", (req, res) => {
  res.set("Content-Type",'text/plain'); //implenting http header
  res.send("Hi Get Request Hit");
});

//post request
server.post("/", (req, res) => {
  res.status(201).send("Post req received"); //implenting status code
});

//put request
server.put("/", (req, res) => {
  res.send("Put req received");
});

//delete
server.delete("/", (req, res) => {
  res.send("Delete req received");
});
server.listen(3100);
