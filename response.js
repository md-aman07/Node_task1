const http = require('http');

const age = 44;
const server = http.createServer((req,res)=>{
    res.setHeader("content-Type", "text/html");
    res.write("<h1>you can write here something </h1>");
    res.write(`${age}`);
    res.end();
})

server.listen(4444, ()=>{
    console.log("server is running on port http://localhost:4444")
});