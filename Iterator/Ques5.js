// 5. What are the different ways of iterating through an array?
// demonstrate them.

let arr = ['10','89','09','22']

function iteratorarr(arr){
    let a = arr[Symbol.iterator]();
    let res = a.next()
    
    while(!res.done){
        console.log(res.value)
        res = a.next()
    }
}


function

iteratorarr(arr)

//1.What are the different ways of iterating through an array?demonstrate them.
//Ans:(1) for loop: This is similar to for loops in other languages like C/C++, Java, etc.
//Exam- 

//	array = [ 1, 2, 3, 4, 5, 6 ];
//	for (index = 0; index < array.length; index++)
//	{
//		console.log(array[index]);
//	}

//(2). while loop: This is again similar to other languages. 

// index = 0;
// 	array = [ 1, 2, 3, 4, 5, 6 ];
	
// 	while (index < array.length)
// 	{
// 		console.log(array[index]);
// 		index++;
// 	}

//(3).forEach() Method: The forEach method calls the provided function once for every array element in the order. 

	// index = 0;
	// array = [ 1, 2, 3, 4, 5, 6 ];
	
	// array.forEach(myFunction);
	// function myFunction(item, index)
	// {
	// 	console.log(item);
	// }
//(4).every() Method: The every() method checks if all elements in an array pass a test (provided as a function). 

	// index = 0;
	// array = [ 1, 2, 3, 4, 5, 6 ];
	
	// const under_five = x => x < 5;
	
	// if (array.every(under_five)) {
	// 	console.log('All are less than 5');
	// }
	// else {
	// 	console.log('At least one element is not less than 5');
	// }
//(5)  map() Method: A map applies a function over every element and then returns the new array. 

	// index = 0;
	// array = [ 1, 2, 3, 4, 5, 6 ];
	// square = x => Math.pow(x, 2);
	// squares = array.map(square);
	// console.log(array);
	// console.log(squares);

 // (6)  Filter() Method: It is used to filter values from an array and return the new filtered array

	// array = [ 1, 2, 3, 4, 5, 6 ];
	
	// even = x => x%2 === 0;
	// evens = array.filter(even);
	// console.log(array);
	// console.log(evens);

   //(7) reduce() Method: It is used to reduce the array into one single value using some functional logic
   
	//array = [ 1, 2, 3, 4, 5, 6 ];
	
	// const helperSum = (acc,curr) => acc+curr
	// sum = array.reduce(helperSum, 0);
	
	// console.log(array)
	// console.log(sum);

   // (8)some() Method: It is used to check whether some array values pass a test.
   


   array = [ 1, 2, 3, 4, 5, 6 ];
	
   const lessthanFourCheck = (element) => element < 4 ;
   const lessthanFour = array.some(lessthanFourCheck)
   
   console.log(array);
   if(lessthanFour){
       console.log("At least one element is less than 4" )
   }else{
       console.log("All elements are greater than 4 ")
   }






