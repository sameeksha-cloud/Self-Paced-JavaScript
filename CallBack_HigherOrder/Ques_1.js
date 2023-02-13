// 1. Are Higher Order functions and Call back functions the same ? If not,
// briefly explain about both functions.


//Ans - 
// A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
// A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed.

/* Example - */

// function gethello(names,callback){
//     var msg = "Be happy ahhh!! "+ names
//     callback(msg)
// }

// function msgprint(names){
//     console.log(names)
// }

// gethello("Zinni",msgprint)


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

