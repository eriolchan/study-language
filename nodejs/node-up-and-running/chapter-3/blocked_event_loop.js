EE = require('events').EventEmitter;
ee = new EE();
die = false;

ee.on('die', function() {
    die = true;
});

setTimeout(function() {
    ee.emit('die');
}, 100);

while(!die) {
}

// This will not be triggered since while loop makes
// Node no chance trigger timeout for die event.
console.log('done');
