// 8). Is it possible to nest async functions in JavaScript? Explain with examples.

// Yes, it is possible to nest async functions in JavaScript. You would do this by simply declaring an async function within another async function. 
// The inner function will then execute asynchronously with respect to the outer function.

function a() {
 return new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('resolved a');
   }, 2000);
 });
}

function b() {
 return new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('resolved b');
   }, 2000);
 });
}

async function asyncCall() {
 console.log('calling');
 async function asynnb(){
    const result = await b();
    console.log(result);
 }
 asynnb()
 const result = await a();
 console.log(result);
}

asyncCall();

