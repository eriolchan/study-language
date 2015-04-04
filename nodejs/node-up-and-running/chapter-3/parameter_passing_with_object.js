var AwesomeClass = function() {
    this.awesomeProp = 'awesome!'
    this.awesomeFunc = function(text) {
        console.log(text + ' is awesome!')
    }
}

var awesomeObject = new AwesomeClass()

function middleware(func) {
    oldFunc = func.awesomeFunc
    func.awesomeFunc = function(text) {
        text = text + ' really'
        oldFunc(text)
    }
}

function anotherMiddleware(func) {
    func.anotherProp = 'super duper'
}

function caller(input) {
    input.awesomeFunc(input.anotherProp)
}

middleware(awesomeObject)
anotherMiddleware(awesomeObject)
caller(awesomeObject)
