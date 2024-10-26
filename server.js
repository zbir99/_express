const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("received request")
    res.writeHead(200,{"content-type":"text/html"});
    res.end("Bonjour tout le monde");
});

server.listen(9090,()=>{
    console.log("Server is running");
});