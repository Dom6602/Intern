/* Write a program to print the area of two rectangles having sides (4,5) and (5,8)
respectively by creating a class named 'Rectangle' with a method named 'Area' which
returns the area and length and breadth passed as parameters to its constructor. */


class Rectangle {

    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    Area() {
        return this.width + this.length + ' ' + 'this is area for rectangle'
    }
}

final1 = new Rectangle(4, 5)
final2 = new Rectangle(5, 8)
console.log(final1.Area())
console.log(final2.Area())
