var uc = require('upper-case');
console.log(uc("hello world"));
var fs = require('fs');
var rs = fs.createReadStream('./tex.txt');
rs.on('open',function(){
	console.log("File is open");
});