const express = require("express");
const server = express();

server.get("/",(req,res)=>{
    res.send("Welcome to Express");
});
// Serve static files from the "public" folder
// Any file inside /public can be accessed directly by its path.
// Example: public/index.html  ->  http://localhost:3100/index.html
//          public/css/style.css -> http://localhost:3100/css/style.css
server.use(express.static('public'));

server.listen(3100);