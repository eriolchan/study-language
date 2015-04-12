var b = new Buffer(1)

console.log(b)

console.log(b.write('a'))
console.log(b)

console.log(b.write('¿'))
console.log(b)

b = new Buffer(5)

console.log(b.write('fffff'))
console.log(b)

console.log(b.write('¿', 1))
console.log(b)
