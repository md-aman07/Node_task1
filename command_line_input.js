// this is a dynamic port , meaning we can run our server on port that we write on below with cmd
// like npx nodemon command_line_input.js (port) like 3333 , 2222, 5555, etc


const http = require('http');

const arg = process.argv;
const port = arg[2] || 5555;
//  console.log(process.argv);
//  console.log("aman is a good boy");

const server = http.createServer((req, res) => {
    res.write("write here something different");
    console.log(process.argv);
    res.end();  
});

server.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`);
});
