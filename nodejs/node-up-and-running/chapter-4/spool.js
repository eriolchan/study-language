// stream is a abstract stream

var spool = ""

stream.on('data', function(data) {
    spool += data
})

stream.on('end', function() {
    console.log(spool)
})
