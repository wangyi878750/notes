// server.js
var http = require('http');
var server = http.createServer(function(request, response){
    try {
        var ret = require('.' + request.url);
        response.end(ret.output);
    } catch (err) {
        response.end(err.toString());
    }   
});
server.listen(8080);