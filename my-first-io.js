var fs = require('fs')

var data = fs.readFileSync(process.argv[2])
var dataString = data.toString()
// console.log(dataString)
var count=dataString.split('\n').length-1
console.log(count)



