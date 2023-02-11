// 6). Create a function that takes a word and returns true if the word
// has two consecutive identical letters.
// Examples
// doubleLetters("loop") ➞ true
// doubleLetters("yummy") ➞ true

function identicalword(str){
    let restr = /([a-z])\1+/g
    if(restr.test(str)){
        return "true"
    }
    else{
        return "false"
    }
}

let str = "yummy"
console.log(identicalword(str))
