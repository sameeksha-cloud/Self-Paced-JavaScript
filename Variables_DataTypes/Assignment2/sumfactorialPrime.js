/* Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).*/


function sumfactprime(num1,num2){
    
    for(let i = num1; i<=num2; i++){
        var flag = 0
        for(let j = 2; j<i; j++){
        if(i % j == 0){
            flag = 1;
            break;
        }

        }
        if(i>1 && flag==0){
                
            let fact = 1
                for(let k =1;k<=i;k++){
                    fact=fact*k 
                }
                console.log(`Prime Number is ${i} and factorial is ${fact}`)
            }
       
    }
    
    
 }


let num1 = 1, num2 = 100
sumfactprime(num1,num2)
