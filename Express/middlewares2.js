const express = require("express");
const server = express();


function firstMiddleware(req, res, next){
  console.log("First middleware Hit"); 
  next(); // Pass control to the next matching route handler
};

function secondMiddleware(req, res, next){
  console.log("Second middleware Hit"); 
  next(); // Pass control to the next matching route handler
};

function globalMiddleware(req,res,next){
    console.log("This is a Global Middleware");
    next();
}
server.use(globalMiddleware);//.use() will run for all requests unless specified a unique url path.
//using the above two middlewares in the below request handler
server.get("/",firstMiddleware,secondMiddleware, (req, res) => {
  res.send("Welcome to Express Server with Two Middlewares"); 
  // Sends response to client and ends request-response cycle
});

server.listen(3100);