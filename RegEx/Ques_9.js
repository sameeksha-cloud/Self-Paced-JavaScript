//Create a function that takes an array of numbers and returns "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array". Examples sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!" // 7 contains the number seven. sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array" // None of the items contain 7 within them.

function boomcheck(arr){
    let str = arr.toString()
    let finalstr = str.match(/7/)
         if(finalstr){
            return "Boom!"
        }
         else{
             return "there is no 7 in the array"
         }
    }

let arr= [4,5,6,8,7,9]
console.log(boomcheck(arr))