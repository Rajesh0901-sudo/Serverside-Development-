const http = require('http');
const host = 'localhost';
const port = 3000;
const fs = require('fs');
const path = require('path');
const server = http.createServer((req,res)=>{
    console.log('Request for '+req.url+' by method '+req.method);
    if(req.method=='GET'){
        
        var fileurl;
        if(req.url=='/') fileurl='/index.html';
        else fileurl=req.url;

        var filepath=path.resolve('./public'+fileurl);
        const fileExt = path.extname(filepath);
        if(fileExt=='.html'){
            fs.exists(filepath,(exists)=>{
                if(!exists){
                    res.statusCode=404;
                    res.setHeader('content-type','text/html');
                    res.end('<html><body><center><h1>Error 404:'+fileurl+
                    ' Not Found</h1></center></body></html>');
                    return;
                }
                res.statusCode=200;
                res.setHeader('content-type','text/html');
                fs.createReadStream(filepath).pipe(res)
            });
        }
        else{
            res.statusCode = 404;
            res.setHeader('content-type', 'text/html');
            res.end('<html><body><center><h1>Error 404:' + fileurl +
                ' is Not HTML file</h1></center></body></html>');
        }

    }
    else{
        res.statusCode = 404;
        res.setHeader('content-type', 'text/html');
        res.end('<html><body><center><h1>Error 404:' + fileurl +
            ' is Not GET Method</h1></center></body></html>');
    }
}) 
server.listen(port,host,()=>{
    console.log(`server is running at http://${host} : ${port}`);
})