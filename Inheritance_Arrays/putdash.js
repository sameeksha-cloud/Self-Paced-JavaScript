// var input = 025468
// var str = input.toString()
// var res = Array.from(str)
// var result = [res[0]]


// for(let i=1; i<str.length; i++){

//     if(res[i-1]%2 === 0 && res[i]%2 === 0){
//         result.push('-',res[i])
//     }

//     else{
//         result.push(res[i])
//     }

// }

// console.log(result.join(''))

var num = 025468
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));