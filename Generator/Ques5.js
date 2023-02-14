// 5. Print an infinite series of natural numbers using a generator.

function *nextNatural(){
    var naturalnumber = 1
    while(true){
        yield naturalnumber++
    }
}

let res = nextNatural()

for(let i = 0;i<10;i++){
    console.log(res.next().value)
}