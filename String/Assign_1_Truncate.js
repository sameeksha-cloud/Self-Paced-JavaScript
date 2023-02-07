function truncatestr(str){
    if(str.length>4){
        var res = str.slice(0,4)
        return res
    }
    else{
        return str
    }
}

var result = truncatestr("Iceberg")
console.log(result)