// Create a function that takes a string, checks if it has the same
// number of x's and o's and returns either true or false.


function XO(str){
    var Xcheck = /x/gi
    var Ocheck = /o/gi

    var lenx = str && str.match(Xcheck) ? str.match(Xcheck).length : 0
    var leno = str && str.match(Ocheck) ? str.match(Ocheck).length : 0

    return lenx === leno

}

let str = "xxooXxoO"
console.log(XO(str))
