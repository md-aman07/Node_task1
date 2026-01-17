const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("<h1> hello this is Mohd Aman</h1>");
    res.end("hello");
})

server.listen(4444, ()=>{
    console.log("server is running on http://localhost:4444");
})


