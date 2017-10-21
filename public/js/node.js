const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer(function (req,res){
console.log("url: " + req.url + " " + "method: " + req.method);
  if(req.url === "/"){
    serveFile(res, "index.html", "text/html", 200);
  }else if (req.url === "/about"){
    serveFile(res, "/about.html", "text/html", 200);
  }else if (req.url === "/contact"){
    serveFile(res, "/contact.html", "text/html", 200);
  }else{
    serveFile(res, "/404.html", "text/html", 200);
  }
});

server.listen(port, function(err){
  if(err){
    return console.log(err);
  }
console.log("server listen on port " + port);
});

function serveFile(res, path, contentType, responseCode){
  if(!responseCode){
    responseCode=200;
  }
console.log(__dirname);
fs.readFile(__dirname + path, function(err, data){
  if(err) return console.log(err);
res.writeHead(responseCode, {"Content-type": contentType});
res.end(data);

});
}
