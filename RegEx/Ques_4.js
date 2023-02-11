// 4). Create a function that will return an integer number
// corresponding to the amount of digits in the given integer num


function num_of_digits(num){
    let len = String(num).match(/\d/g).length
    return len
}

let num = 1023546
console.log(num_of_digits(num))