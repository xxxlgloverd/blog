// var fs =require("fs");
// var data = fs.readFileSync('请叫我总监_红九.txt');
// console.log("REPL常用指令：");
// console.log(data.toString());

const fs = require('fs');
fs.readFile('请叫我总监_红九.txt', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
})