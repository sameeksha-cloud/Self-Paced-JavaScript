function findlargest(arr){
  return arr.sort(function(a,b){
    return a-b
  })
}

let arr = [3,45,6,7,23,5,7,8]
let result = findlargest(arr)
let unique = [...new Set(result)]
console.log(unique[4])



