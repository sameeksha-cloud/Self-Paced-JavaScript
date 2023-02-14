// 4. Create a generator for multiplying?

function* gen() {
    let result = yield "2 * 2 = ?"; 
    console.log(result);

    let result2 = yield "3 + 3 = ?";
    console.log(result2)


}
  
  let generator = gen();
  console.log(generator.next().value); 
  console.log(generator.next(4).value); 
  console.log(generator.next(6).done); 





// Output -