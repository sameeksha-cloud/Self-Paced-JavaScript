// Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

var num = 4
var k = ""
var count = 1
for(let i = 1; i<=num;i++){
    for(let j=1; j<=i;j++){
         k =k+" "+count
         
         count++
        
    }
    k=k+"\n"
    //console.log(k)
}
console.log(`${k}`)



var num = 4
var k = ""
var count = 1
for(let i = 1; i<=num;i++){
    for(let j=1; j<=i;j++){
         k+="*"
        
    }
    k=k+"\n"
    //console.log(k)
}
console.log(`${k}`)






