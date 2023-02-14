// 4. In the following two arrays find which two elements match
// using iterators.
// Array 1 - [“a”, “b”, “c”, “d”]
// Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]


function matchele(arr1,arr2){
    let pointarr1 = arr1[Symbol.iterator]()
    let pointarr2 = arr2[Symbol.iterator]()

    let result1 = pointarr1.next()
    let result2 = pointarr2.next()

    while(!result1.done){
        let charc = result1.value
        //console.log(charc)
        while(!result2.done){

            if(charc === result2.value){
                console.log(result2.value)
            }
            result2 = pointarr2.next()
           
        }
        result1 = pointarr1.next()
    }
}

let arr1 = ["a", "b", "c", "d"]
let arr2 = ["e", "f", "g", "h", "a", "l", "j"]
matchele(arr1,arr2)
