// 2. What is the syntax of a generator?

//Ans - function *functionname() { ...... }

function *food(){

    console.log("Sandwich!!")
    console.log("Burger")
    yield "Stomach Full"
    console.log("Noodles")
    yield "100*200"
    console.log("Bye!!")
}

let result = food()
console.log(result.next())
console.log(result.next())
console.log(result.next())
