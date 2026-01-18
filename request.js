const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write("starting page of our server");
    }
    else if(req.url == '/aman'){
        res.write("this is aman's page");
    }
    else{
        res.write("we dont know the page");
    }
    res.end();

})

server.listen((5555), ()=>{
    console.log("server is running on port http://localhost:5555");
})