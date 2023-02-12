// 6).

Promise.resolve('Success!')
.then(data => {
return data.toUpperCase()
})
.then(data => {
return console.log(data)
})

// What will the output be?
// Ans - SUCCESS!