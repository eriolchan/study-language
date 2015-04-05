var http = require('http')
var server = http.createServer()

var handleReq = function(req, res) {
    res.writeHead(200, {})
    res.end('hello world')
}

server.on('request', handleReq)
server.listen(8125)
