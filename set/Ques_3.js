//3. Create a set object with four random numbers from 0 to 10. Check if this newly created set object has 8 in it. Use set object methods.

let set = new Set()

for(let i = 1; i<=10; i++){
    let num = Math.ceil(Math.random()*10)    // Create a set object with four random numbers from 0 to 10. 
    set.add(num);
}

function checksetobj(){
    var count = 0
    for (i of set.values()) {
        if(i===8){
            count++
        }
    }
    if(count>0){
        return "true"
    }
    else{
        return "false"
    }

}
console.log(set,checksetobj())