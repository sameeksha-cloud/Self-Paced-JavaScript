// Write a Javascript function to test whether the first character of a string is lowercase.

function firstoccurence(str, index){
    var first = str[index].toLowerCase()

    if( first === str[index]){
        return "True first character is in lowercase."
    }
    else{
        return "False first character is not in uppercase."
    }
}

var res = firstoccurence("danjuBaba",0)
console.log(res)
