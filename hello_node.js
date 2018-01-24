var http = require('http');

var server = http.createServer(function(request, response) {
  console.log('You got a request!');
  response.write('Hello Node');
  response.end();
});

server.listen(3000);