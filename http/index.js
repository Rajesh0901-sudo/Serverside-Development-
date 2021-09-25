const http = require('http');
const host = 'localhost';
const port = 3000;
const server = http.createServer((req,res)=>{
    console.log(req.header);
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end(<html><body><center>Hii</center></body></html>)
}) 
server.listen(port,host,()=>{
    console.log(`server is running at http://${host} : ${port}`);
})