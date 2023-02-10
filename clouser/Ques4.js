//4. Output of following closure ?
// 3
// 3
// 3


for (var i = 0; i < 3; i++) {
setTimeout(function xyz() {
console.log(i); // What is logged?
}, 1);
}