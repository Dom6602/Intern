/* Write a program that would print the information (name, year of joining, salary,address) 
of three employees by creating a class named 'Employee'. The output shouldbe as follows:
    Name Year of joining Address
    Robert 1994 64C- WallsStreat
    Sam 2000 68D- WallsStreat
    John 1999 26B- WallsStreat */



class Employee {

    constructor(name, yearjoin, address) {
        this.name = name;
        this.yearjoin = yearjoin;
        this.address = address;
    }
    
    getInfo() {
        return this.name + '     ' + this.yearjoin + '        ' + this.address

    }
}

final = new Employee("Name", "YearOfJoining", "Address")
final1 = new Employee('Robert', '1994', '64C-WallsStreet')
final2 = new Employee('Sam', '2000', '68D-WallsStreat')
final3 = new Employee('John', '1999', '26B-WallsStreet')

console.log(final.getInfo());
console.log(final1.getInfo())
console.log(final2.getInfo())
console.log(final3.getInfo())

