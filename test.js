//Blocking Code
console.log("Blocking Code");
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());

//Non Blocking Code
console.log("Non Blocking Code");
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("프로그램 종료");