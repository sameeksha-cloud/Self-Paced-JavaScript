//Input a String S with a word, and replace character “a” with “x” and display the result -Input: “apple” Output: “xpple”

function replacechar(str){

    return str.replaceAll('a','x')

}

var result = replacechar("apple")
console.log(result)