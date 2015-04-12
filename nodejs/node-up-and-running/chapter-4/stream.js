var fs = require('fs')
var filehandle = fs.readFile('event_emitter.js', function(err, data) {
    console.log(data)
})
