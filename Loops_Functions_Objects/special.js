// Write a program to find whether a given number is special number or
// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 145


var sum = 0
function Speical(n){
    while(n>0){
        let digit = n % 10
        let fact = 1
        for(let i = 1; i<=digit; i++){
            fact = fact*i
        }
        sum+=fact
        n=parseInt(n/10)

    }
    return sum
}
var num = 145
var res = Speical(num)

if(num === sum){
    console.log(`${res} is a Special Number.`)
}
else{
    console.log(`${num} is a not Special Number.`)

}


