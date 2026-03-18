// Import the built-in HTTP module to create a web server
const http = require("http");

// Create the server with a request-handler function
// This function runs EVERY time a client sends a request
const server = http.createServer((req, res) => {
  // Log the URL that the client is requesting
  // Example: "/", "/user", "/product"
  console.log("Requested URL:", req.url);

  // Send an initial message to the client
  // This does NOT end the response; it only writes partial data
  res.write("Welcome to my Website\n");

  // ----------- ROUTING LOGIC -----------

  // If the user goes to: http://localhost:3000/user
  if (req.url === "/user") {
    // End the response with a specific message for the /user route
    // 'return' ensures nothing below runs (avoids write-after-end error)
    return res.end("This is the User Page");
  }

  // If the user goes to: http://localhost:3000/product
  else if (req.url === "/product") {
    // End the response with a specific message for the /product route
    return res.end("This is the Product Page");
  }

  // ----------- DEFAULT RESPONSE -----------

  // If the user visits any other route (e.g., "/abc", "/home")
  // this message will be sent
  res.end("This is the end of the Communication with a Message");
});

// Start the server and make it listen on port 3000
server.listen(3000);
