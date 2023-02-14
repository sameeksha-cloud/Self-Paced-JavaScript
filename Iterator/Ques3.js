// 3. Create a functional iterator, with a next function.

function functionaliterator(str){

    let pointstr = str[Symbol.iterator]();
    let result = pointstr.next()

    while(!result.done){
        console.log(result.value)
        result = pointstr.next()
    }
}

let str ="Be Happy!!"
functionaliterator(str)