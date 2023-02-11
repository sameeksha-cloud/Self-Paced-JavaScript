// 3). Write a regular expression that matches only a prime number.
// Numbers will be presented as strings.


function isPrime(n) {
    var re = /^.?$|^(..+?)\1+$/;
    return !re.test('1'.repeat(n));
}

let result = isPrime("124")
console.log(result)
