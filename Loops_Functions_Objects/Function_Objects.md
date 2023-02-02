## Functions 
---

Functions are used to perform operations. We can call JavaScript Function many times to reuse the code.

- code resuability
- code readable

```
<script>
function cube(num){
    alert(num*num*num);
}
</script>
<form>
<input type = "button" = "click" onclick = "cube(3)"/>
</form>
```

## Objects 
---

It is an object-based language. Everything is an object in JavaScript. It's template based not class based.
We don't create class to get the object. But, we direct create objects.


### ways to create objects 
- object by object literal
- instance of object
- oject Constructor


1. Object by Object literal : 

```
Syntax:
Object = {property1:value1;
property2:value2;
}
```

2. instance of object

```
var objectname = new Object();
```

3. Object Constructor
here, you need to create function with arguments. Each arguments value can be assigned in the curent object by using this keyword.
This keyword refers to the current object.

```
function emp(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
var obj = new emp("1001","neeti","3000000")
console.log(e.id+" "+e.name+" "+e.salary)
```
