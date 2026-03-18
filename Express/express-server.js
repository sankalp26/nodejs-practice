const express = require("express");

//create a server
const server = express();

//Handle default request
server.get("/", (req, res) => {
  res.send("Hi Welcome to Express Server");
});

//Listen on Specified port
server.listen(3100, () => {
  console.log("Server is listening on 3100");
});
