//Example of sending a static html page as a response.

const http = require("http");
const fs = require("fs");// Import the built-in File System module to read files
const server = http.createServer(
    (req,res)=>{
      const data = fs.readFileSync("server3.html").toString(); // Read the HTML file synchronously (blocking operation)
      // This returns a Buffer, so we convert it to a string
      res.end(data); // Send the file contents as the response to the client
    }
);
server.listen(3000);