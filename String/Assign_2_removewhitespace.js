function removewhitespace(str){
    var strarr = ""
    var res = []
    for(let i = 0; i<=str.length; i++){
        if(str[i] === ' '){
            continue
            
        }
        else{
            strarr = res.push(str[i])
        }
    }

    return res.join('')

}

var result = removewhitespace("Hi Boy")
console.log(result)