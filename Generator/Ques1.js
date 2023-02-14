// 1. What is the difference between a generator and a function?

/* The difference between a generator and a regular function is:

In response to a generator call, its code doesn’t run. In its place, it returns a special object called a ‘Generator Object’ to manage the execution.
At any time, the generator function can return (or yield) the control back to the caller.
The generator can return (or yield) multiple values according to the requirement, unlike a regular function.
Syntax: Generator functions have a similar syntax to regular functions. As the only difference, the generator function is denoted by an asterisk (*) after the function keyword.

*/