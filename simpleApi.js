const http  = require('http');

const userData = [
    {
        name: 'mohd aman',
        phone_no: 99393939949,
        email: 'abc@gmail.com'
    },
     {
        name: 'mohd sakib',
        phone_no: 933393939949,
        email: 'sadfdfc@gmail.com'
    },
     {
        name: 'mohd farddd',
        phone_no: 993555939949,
        email: 'dddd@gmail.com'
    }
]


const server = http.createServer((req,res)=>{
    res.setHeader("Content-type", 'application/json')
    res.write(JSON.stringify(userData))
   
    res.end();
})

server.listen(5555, ()=>{
    console.log("server is running on port http://localhost:5555");
})