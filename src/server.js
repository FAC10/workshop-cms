var http = require("http");

var server = http.createServer();

server.listen(3000, function(){
  console.log("the server is listening on port 3000. Ready to accept requests");
})
