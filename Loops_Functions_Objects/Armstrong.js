// Write a program to find whether a given number is armstrong number or

// not-
// The Armstrong number is a number that is equal to the sum of cubes of

// its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers. Let's try to understand why 153 is an Armstrong number.
// 0 = (1*1*1)+(5*5*5)+(3*3*3) where:
// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27
// So:
// 1+125+27=153

var sum = 0
function Armstrong(n){
    while(n>0){
        let digit = n % 10
        let cube = digit*digit*digit
        sum+=cube
        n=parseInt(n/10)

    }
    return sum
}
var num = 122
var res = Armstrong(num)

if(num === sum){
    console.log(`${res} is a Armstrong Number.`)
}
else{
    console.log(`${num} is a not Armstrong Number.`)

}