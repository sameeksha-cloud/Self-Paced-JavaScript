
// 2). Is it possible to use async/await with promise chains? If yes how can this be achieved?

/* Ans- Yes, It can achieved by making only the Promise Chain in asynchronous whereas the entire wrapper function as asynchronous in async/await.
Yes, it is possible to use async/await with promise chains. In order to do this, you must first await the initial promise in the chain, and then you can continue working with the results of that promise as if they were synchronous. This can be a useful way to avoid callback hell when working with asynchronous code.

*/

function getname(){
    return Promise.resolve("Heloo ZEE!!")
}

function getmessage(name){
    return Promise.resolve(`${name} .Welcome to tuna. Wait for your keys Number.`)
}

function waitdelaykey(msg){
    setTimeout(function(){
        console.log(`${msg} Your key number is 10023`)
    },1000);
}

function printmsg(finalmsg){
    return Promise.resolve(finalmsg)
}

async function getcustomerdetails(){
    let cusname = await getname();
    let cusmsg = await getmessage(cusname);
    let keynum = await waitdelaykey(cusmsg);
    return await printmsg(keynum)

}
getcustomerdetails();






