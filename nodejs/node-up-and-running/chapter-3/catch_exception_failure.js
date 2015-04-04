var http = require('http')

var opts = {
    host: 'google.com', // use this hostname due to GFW
    port: 80,
    path: '/'
}

try {
    http.get(opts, function(res) {
        console.log('Will this get called?')
    })
}
catch (e) {
    console.log('Will we catch an error?')
}
