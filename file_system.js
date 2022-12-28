const fs = require('fs');
// console.log(fs);

// asynchronous method 
fs.readFile(__dirname+"/teacher.txt",'utf8',(error,data)=>{
    console.log(data);
})
console.log("hello adhish");