var express = require('express'),
    bodyParser = require('body-parser')

var app = express()
app.listen(8000)

var tweets = []

app.get('/', function(req, res) {
    res.send('Welcome to Node Twitter')
})

app.post('/send', bodyParser.urlencoded({ extended:false }), function(req, res) {
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet)
        res.send({status:"ok", message:"Tweet received"})
    } else {
        res.send({status:"nok", message:"No tweet received"})
    }
})

app.get('/tweets', function(req, res) {
    res.send(tweets)
})

console.log('Start twitter service')
