var URL = require('url')

var myUrl = 'http://www.nodejs.org/some/url/?with=query&param=that&are=awesome#alsoahash'
console.log('myUrl: ' + myUrl)

parseUrl = URL.parse(myUrl)
console.log('parse result:')
console.log(parseUrl)

parseUrl = URL.parse(myUrl, true)
console.log('parse result with querystring:')
console.log(parseUrl)
