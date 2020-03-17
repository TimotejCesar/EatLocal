var http = require('http');
var fs = require('fs');
var router = require('./routing/index');

http.createServer(function (req, res) { 

    res.writeHead(200, {'Content-Type': 'text/html'});  
      
    var url = req.url;

    router.handleRoute(url, res);
      
}).listen(3000, function() { 
      
    // The server object listens on port 3000 
    console.log("server start at port 3000"); 
}); 