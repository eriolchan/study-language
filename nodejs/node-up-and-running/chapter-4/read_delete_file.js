var fs = require('fs')

fs.readFile('test.txt', function(e, data) {
    console.log('test: ' + data)
    fs.unlink('test.txt')
})
