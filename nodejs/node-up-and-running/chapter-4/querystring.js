var qs = require('querystring')

var queryString = 'a=1&b=2&c=d'
console.log(qs.parse(queryString))

var myObj = {'a':1, 'b':5, 'c':'cats', 'func':function() {console.log('dogs')}}
console.log(myObj)

console.log('encode result:')
console.log(qs.encode(myObj))
