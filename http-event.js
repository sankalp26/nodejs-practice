//creating a POST request Handler (simple http API)

const http = require("http");
const server = http.createServer((req, res) => {
  // Check if the incoming request method is POST
  if (req.method == "POST") {
    //expecting data from client
    // Initialize an empty string to store incoming data
    // POST data comes in small chunks (streams)
    let body = "";
    // 'data' event fires every time a chunk of data is received
    req.on("data", (chunk) => {
      // Convert Buffer chunk to string and append it
      body += chunk.toString();
    });
    // 'end' event fires when all chunks have been received
    req.on("end", () => {
      console.log(body);
      res.end("Data is received");
    });
    return;
  }
  // This response is sent for all non-POST requests (GET, etc.)
  res.end("\nWelcome to my Server");
  
});
server.listen(3000);

console.log("Server is listening on 3000");
