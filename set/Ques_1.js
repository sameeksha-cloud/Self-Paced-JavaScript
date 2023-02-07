// 1. Can we put duplicate values in the set object ?

// Ans - No, Set does not store duplicate values it's will store unique values.


// eg. Storing "Sunny" two times in set but in output it will return only unique values.

// Output : Set(2) { 'Sunny', 123 }

let set = new Set()
set.add("Sunny");
set.add(123);
set.add("Sunny")                     // duplicates values it's will store unique values.
console.log(set)