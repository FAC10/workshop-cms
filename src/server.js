var http = require("http");
var fs = require("fs");

var message = 'I am watching you';

function handler (request, response){
  var method = request.method;

  var endpoint = request.url;
  console.log(endpoint);

  if (endpoint === "/"){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + '/../public/index.html', function(err, file){
      if (err){
        console.log(err);
        return;
      }
      response.end(file);
    })
  }

  else {
    var extension = endpoint.split('.')[1];
    var extensionType = {
      'html': 'text/html',
      'css': 'text/css',
      'js': 'application/javascript',
      'ico': 'image/x-icon',
      'jpg': 'image/jpg',
      'png': 'image/png'
      }
    response.writeHead(200, {'Content-Type': extensionType[extension]});
    console.log(__dirname + '/../public'+ endpoint);
    fs.readFile(__dirname + '/../public'+ endpoint, function(err, file){
      if (err) {
        console.log(err);
        return;
      }
      console.log("I'm running")
      response.end(file);
    });
  }


}

var server = http.createServer(handler);

server.listen(3000, function(){
  console.log("the server is listening on port 3000. Ready to accept requests");
})
