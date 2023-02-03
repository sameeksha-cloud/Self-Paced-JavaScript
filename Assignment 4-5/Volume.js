class Cylinder{
    constructor(radius,height){
        this.radius = radius
        this.height = height
    }
    getVoulme(){
        return ((3.14*(this.radius*this.radius)*this.height).toFixed(4))
    }
}

class Sphere{
    constructor(radius){
        this.radius = radius
    }
    getVoulme(){
        return ((4/3*(3.14*(this.radius*this.radius*this.radius))).toFixed(4))
    }
}

class Cone{
    constructor(radius){
        this.radius = radius
    }
    getVoulme(){
        return (((3.14*(this.radius*this.radius))/3).toFixed(4))
    }
}

let obj = new Cylinder(2,3)
let obj1 = new Sphere(2,3)
let obj2 = new Cone(2,3)
console.log(obj.getVoulme())
console.log(obj1.getVoulme())
console.log(obj2.getVoulme())
