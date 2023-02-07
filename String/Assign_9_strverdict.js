//Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc (any combination) using string methods.How will you handle that ?

function handleignorecase(input){
if(input.match(/yes/i)){
    return "true"
}
else{
    return "false"
}
}

var input = "YES"
console.log(handleignorecase(input))
