const http = require("http");
const server = http.createServer((req,res)=>{
    res.write("This is coming from NodeJS server")
    if(req.url=="/first"){
        res.end("\nThis is the first Response");
        return;
    }
    res.end("\nHi This is the default Response");
});
server.listen(3000);