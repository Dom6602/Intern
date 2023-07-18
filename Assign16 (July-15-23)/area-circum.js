/*  Write a program that calculates the area, circumference of a circle? Make the area and
circumference generic and implement it for other shapes like triangle and rectangle?
Use ES6 functions. */


let area
let circumference
let perimeter

//pass parameter
const circle = (radius) => {
    area = Math.PI * radius * radius
    circumference = 2 * Math.PI * radius
    return {area, circumference}        //return {} use more than one var
}

const triArea = (breath, height) => {
    area   = (1/2) * breath * height
    return area        
}

const tricircum = (sideA, sideB, sideC) => {
    perimeter = sideA + sideB + sideC
    return perimeter        
}

const recAreaPeri = (length, width) => {
    area = length * width;
    perimeter = 2 * (length + width);
    return {area, perimeter}
}

//call fun
circle_Area_Circum = circle(4)
console.log(circle_Area_Circum)

triangle_Area = triArea(4, 5)
console.log(triangle_Area)
triangle_Perimeter = tricircum(1, 2, 3)
console.log(triangle_Perimeter)

rectangle_Area_Perimeter = recAreaPeri(6, 7)
console.log(rectangle_Area_Perimeter)
