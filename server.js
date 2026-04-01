//Create a server using NodeJS

//1. Import http library/module
const http = require('http');

//2. create server using the createServer method and pass a function inside it with request and response as parameters.
const server = http.createServer((req,res)=>{
    //this arrow function gives us access to request and response
    //here comes the request
    res.end("Hi Welcome to NodeJS Server");
});//we have created a listener through this server

//3. Specify a port no. to listen to client's requests .listen(portNo, fn)
server.listen(3100, ()=>{
    console.log("Server is listening on port 3100");
});