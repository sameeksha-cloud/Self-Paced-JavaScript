// 7). ATM machines allow 4 or 6 digit PIN codes and PIN codes
// cannot contain anything but exactly 4 digits or exactly 6 digits. Your

// task is to create a function that takes a string and returns true if the
// PIN is valid and false if it's not.
// Examples
// validatePIN("1234") ➞ true
// validatePIN("12345") ➞ false


function validatePIN(str){
    let x = /\b[0-9]{4}\b|\b[0-9]{6}\b/
    if(x.test(str)){
        return "true"
    }
    else{
        return "false"
    }

}

let str = "1234555"
console.log(validatePIN(str))