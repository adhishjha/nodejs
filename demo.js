const http= require('http');
// console.log(http);
const server = http.createServer(function(req,res){
    res.write('welcome to node js')
    res.write('welcome to gwalior city')
    res.end()
}).listen(5500,()=>console.log("server is running localhost:5500"))