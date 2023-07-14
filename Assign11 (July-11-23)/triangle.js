// print the area and perimeter of a triangle having sides of 3, 4, and 5
// units by creating a class named 'Triangle' without any parameter in its constructor


class Triangle {
    side1 = 3;
    side2 = 4;
    side3 = 5;

constructor() {

    const perimeter = this.side1 + this.side2 + this.side3;
    console.log("perimeter" + perimeter);
    const sp = perimeter / 2;   
    const a = sp-this.side1;
    const b = sp-this.side2;
    const c = sp-this.side3;
    const area = Math.sqrt ( sp * a * b* c);
    console.log("this is p =" + perimeter,"this is area =" + area);
}

}

new Triangle()