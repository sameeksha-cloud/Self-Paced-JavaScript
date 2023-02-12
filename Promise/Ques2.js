//2). Write a sleep function using a promise in javascript?

function sleep(ms){
    let promise = new Promise(function(resolve,reject){
         setTimeout(function(){
            resolve("Sleep function executed")
        },ms);
})
    return promise
}

async function callsleep(x){
    let result = await sleep(x)
    console.log(result)
}

callsleep(4000);


