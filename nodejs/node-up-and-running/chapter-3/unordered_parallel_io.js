fs = require('fs');

fs.readFile('foo.txt', 'utf-8', function(err, data) {
    console.log(data);
});

fs.readFile('bar.txt', 'utf-8', function(err, data) {
    console.log(data);
});
