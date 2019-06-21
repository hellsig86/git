// 서버 생성
// 1. 모듈 import
var http = require('http');

// 2.서버 생성
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello NodeJS\n');
}).listen(8081);

// 3.서버 테스트
console.log('Server running at http://127.0.0.1:8081');

