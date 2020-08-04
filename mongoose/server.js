var http = require('http')
var url = require('url')
var fs = require('fs')

var port = 3000;

http.createServer(function(req, resp) {
  resp.writeHead(200, {'Content-Type': 'text/html'});

  var result = url.parse(req.url);
  data = fs.readFile(__dirname + result.pathname, function(err, data) {
    resp.write(data);
    resp.end();
  });

}).listen(port, function() {
  console.log('Servidor http criado em http://localhost:' + port);
})
