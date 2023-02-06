function DashInsert(num){

    var str = num.toString()
    //return str
    var res = Array.from(str)
    var result = [res[0]]


    for(let i=1; i<str.length; i++){

        if(res[i-1]%2 === 0 && res[i]%2 === 0){
            result.push('-',res[i])
        }

        else{
            
            result.push(res[i])
        }

    }

    var x = result.join('')
    return x

}
var arresult = DashInsert(025468)
console.log(arresult)
