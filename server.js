'use strict'
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'Text/plain'});
	res.end('哈喽世界\n');
}).listen(3000,"127.0.0.1");
console.log('Server running at http://127.0.0.1');