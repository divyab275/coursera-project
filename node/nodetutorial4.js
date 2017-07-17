var http = require('http');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
http.createServer(function(req,res){
	var myEventHandler = function(){
		console.log("Button is clicked");
	};
	eventEmitter.on('click',myEventHandler);
	eventEmitter.emit('click');
}).listen(3000);