## Variables
---
Variables are names of storage location. 

There are 3 ways to declare variable.
1. var
2. let
3. const

### Declare Variables
```
let xyz; // by default undefined 
```

### Define Variable
```
let xyz = 10
```

### Declaring multiple variables at the same time
```
var temp1=10, temp2=20, temp3="rainy";
```

### Re-Declaring variables
Re-Declaring variables does not make any difference.
```
var xyz = 'fun'
var xyz
console.log(xyz)

output: fun
```

### Re-Defining variables
Re-Defining variables is only allowed with var
```
var xyz = 'fun'
var xyz = 'gun
console.log(xyz)

output: gun
```


There are two types of variables in JavaScript :-
1. Local Variables
2. Global Variables


### Local Variables

A local variables are declared inside block or function.Accessible within the function or block only.

```
<script>
function localvariables(){
    let x = 18; //local variable
}
</script>

```

### Global Variables

Global variables are declared at the top of the code.It can be accessible from any function.
 
```
<script>
var num = 20 //gloabl variables
function globalvariables(){

}

```

