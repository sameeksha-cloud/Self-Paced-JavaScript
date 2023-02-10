// 1. Carefully observe this example.
// a) Is the InnerFunction() a closure?
// b) What is output of this program

function OuterFunction()
    { 
        var outerVariable = 100;
        function InnerFunction() {
        alert(outerVariable);
        }
    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();


/* a.) Yes, Innerfunction() is a clousre bcause it's a self-invoking function. 
b. ) Output of this program is : 100.
*/


