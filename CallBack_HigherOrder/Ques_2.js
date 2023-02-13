// Is filter a Higher Order function in Javascript ? If yes, why ?

/* Ans - Yes filter() is a Higher Order function.As, it can accept function as an arguments.*/

const data = ["hashnode", "is", undefined]

// We could filter out the undefined data by saying
const filteredData = data.filter((x) => x != undefined)

console.log(filteredData ) // ["hashnode", "is"]