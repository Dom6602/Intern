
/* Write a program by creating an 'Employee' class having the following methods and
print the final salary.
1 - 'getInfo()' which takes the salary, number of hours of work per day of the employee
as a parameter
2 - 'AddSal()' which adds $10 to the salary of the employee if it is less than $500.
3 - 'AddWork()' which adds $5 to the salary of an employee if the number of hours of
work per day is more than 6 hours. */

class Employee {

    constructor(salary, perday) {
        this.salary = salary;
        this.perday = perday;
    }
    
    getInfo() {
        return this.salary + ' ' + this.perday + ' ' + 'this is salary and hour of work per day'

    }

    AddSal() {
        if (this.salary < 500) {
            this.salary += 10; // Add $10 to the salary
        }
        return this.salary + ' ' + 'this is salary for < 500'
    }

    AddWork() {
        if (this.perday > 6) {
            this.salary += 5; // Add $5 to the salary
        }
        return this.salary + ' ' + 'this is salary for > 6'
    }

}

final = new Employee(400, 5)
console.log(final.getInfo())
console.log(final.AddSal())
console.log(final.AddWork())


