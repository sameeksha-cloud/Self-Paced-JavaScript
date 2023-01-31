/* Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

function Celciustemp(fahrenheitvalue){
    var celcius = ((fahrenheitvalue-32)*5/9)
    return (`${fahrenheitvalue}°F is ${celcius}°C`)
}

function Fahrenheitval(CelciusTemp){
    var Fahrenheit = ((CelciusTemp*9/5)+32)
    return (`${CelciusTemp}°C is ${Fahrenheit}°F`)
}

var result = Fahrenheitval(60)
console.log(result)

var result = Celciustemp(45)
console.log(result)


