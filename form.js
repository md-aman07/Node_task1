const http = require('http');
const fs = require('fs');
const queryString = require('querystring');

http.createServer((req, resp) => {

    if (req.url === '/') {
        fs.readFile('HTML/form.html', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { "Content-type": 'text/plain' });
                return resp.end('Internal Server Error');
            }
            resp.writeHead(200, { "Content-type": 'text/html' });
            resp.end(data);
        });
    } 
    else if (req.url === '/submit' && req.method === 'POST') {

        let dataBody = [];

        req.on('data', chunk => dataBody.push(chunk));

        req.on('end', () => {
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = queryString.parse(rawData);

            const dataString = "My name is "+ readableData.name + "MY email id is "+ readableData.email;
            //below is syncronuous file
            // fs.writeFileSync("text/"+readableData.name+".txt", dataString);

            //now this is asyncronous file
            fs.writeFile("text/asyncroneoums.txt", dataString, 'utf-8', (err)=>{
                 if(err){
                    resp.end('internal error');
                    return false;
                 }
                 else{
                    console.log("file is created");
                    return true;
                 }
            })
           
            resp.writeHead(200, { "Content-type": 'text/html' });
            resp.end(`
                <h1>Form Submitted Successfully</h1>
                <p><strong>Name:</strong> ${readableData.name}</p>
                <p><strong>Email:</strong> ${readableData.email}</p>
                <p><strong>Message:</strong> ${readableData.message}</p>
                <a href="/">Go Back</a>
            `);
        });
    } 
    else {
        resp.writeHead(404, { "Content-type": 'text/plain' });
        resp.end("404 Not Found");
    }

}).listen(3200, () => {
    console.log("Server is running on http://localhost:3200");
});
