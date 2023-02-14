// 2. Iterate over all the characters of the word “iNeuron”.

function iteratestr(str){
    let strf = str[Symbol.iterator]();
    let res = strf.next()

    while(!res.done){
        console.log(res.value)
        res = strf.next()
    }
}

let str = 'iNeuron'
iteratestr(str)