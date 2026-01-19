const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   fs.readFile('HTML/web.html', 'utf-8', (err,data)=>{
    if(err){
    res.writeHead(500,{"Content-type": 'text/plain'})
    res.writable('internal server error');
    res.end();
    return;
    }
    res.writeHead(200, {"content-type": 'text/html'});
    res.write(data); 
    res.end()
   })
})

server.listen(4444, ()=>{
    console.log("server is running on http://localhost:4444");
})


