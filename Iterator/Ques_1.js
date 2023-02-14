// 1. Create a function to iterate over the following list [“John”, “Rohn”, “Danny”, “James”]

function iteratefunc(arr){

    let strarr = arr[Symbol.iterator]();
    let res = strarr.next()
    //console.log(res)

    while(!res.done){
        console.log(res.value)
        res = strarr.next()
    }

}

let arr = ["John", "Rohn", "Danny", "James"]
iteratefunc(arr)