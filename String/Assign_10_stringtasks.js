var str = "Arizona"
var str1 = "VAHDAJLAHSRAH"


//Convert the String into upper case.
console.log(str.toUpperCase())


//Convert only the first character to uppercase.
console.log(str[0].toUpperCase())

//Convert the String into lower case.
console.log(str1.toLowerCase())

//Break the string into two halves and swap them.
var halves1 = str.substring(0,(str.length)/2)
var halves2 = str.substring((str.length)/2,str.length)
console.log(halves2+halves1)


//Count the repeating characters.
                                    // var repeat = str1.match(/A/g).length
                                    // console.log(repeat)
let myString = 'abababc';
let result = {};
for (let str of myString) {
  result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
}
console.log(result);


//Reverse the string
console.log(str.split('').reverse().join(''))

