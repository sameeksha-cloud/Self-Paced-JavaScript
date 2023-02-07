//What string method can be used to check the occurrence of a specified text in a string?

var str = "adadadad"
var res = str.match(/a/g)
console.log(res.length)

// var str = "adadadad"
// console.log(str.indexOf('a'))