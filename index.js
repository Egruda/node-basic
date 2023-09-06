const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path')


http.createServer(function (req, res) {

  let filename = ''
  
  if(req.url === '/') {
    filename = "./index.html";
  } else {
    filename = "." + req.url;
  }

  fs.readFile(filename, function(err, data) {
    if (err) {
      if(err.code === 'ENOENT') {
        fs.readFile(path.join(__dirname, '404.html'), function (err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data, 'utf8');
        })
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data, 'utf8');
    };
})}).listen(8080);