// Give an example of a Higher Order function and a call back function
// used in the same program.

function greet(name){
    return `Hi!! ${name} `;
}
  
function greet_name(greeting,message,name){
       console.log(`${greeting(name)} ${message}`);
}
  
greet_name(greet,'Welcome To Tuna','World');


/* "greet_name" is higher order function as it accepts thee "greet" function as an argument.
"greet" is a callback function which is passed to another function to be called later
*/

