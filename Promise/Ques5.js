// 5). Write a function delay that returns a promise. And that promise
// should return a setTimeout that calls resolve after 1000ms.


function getDelay(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('after 1000ms')
        },1000)
    });

}

async function delaycall(){
    let result = await getDelay();
    console.log(result)
}
delaycall();