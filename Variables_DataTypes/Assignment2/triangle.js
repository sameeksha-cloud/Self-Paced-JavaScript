//Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

function triangle(x,y,z){
    if(x === y && y === z){
        return(`Triangle is equilateral triangle with sides ${x},${y},${z}`)
    }

    else if(x === y || y === z || x == z){
        return(`Triangle is isosceles triangle with sides ${x},${y},${z}`)
    }

    else{
        return(`Triangle is Scalene triangle with sides ${x},${y},${z}`)
    }
    
}

var x = 40 , y = 40 ,z= 40
console.log(triangle(x,y,z))