// 8). Create a function that determines whether a string is a valid hex
// code. A hex code must begin with a pound key # and is exactly 6
// characters in length. Each character must be a digit from 0-9 or an
// alphabetic character from A-F. All alphabetic characters may be
// uppercase or lowercase.
// Examples
// isValidHexCode("#CD5C5C") ➞ true
// isValidHexCode("#EAECEE") ➞ true
// isValidHexCode("#CD5C&C") ➞ false


function isValidHexCode(str){
    let strreg = /^#[a-fA-F0-9]{6}/g
    if(strreg.test(str)){
        return "true"
    }
    else{
        return "false"
    }
}

let str = "#CD5C&C"
console.log(isValidHexCode(str))