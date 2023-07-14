

/* Create a class called 'Matrix' containing a constructor that initializes the 
number of
rows and the number of columns of a new Matrix object. The Matrix class has the
following information:
1 - number of rows of the matrix
2 - number of columns of the matrix
3 - elements of the matrix in the form of a 2D array */


class Matrix {

    constructor(rows, columns) {
        this.rows = rows;       
        this.columns = columns;
        this.elements = this.newMatrix(rows, columns);
    }

    newMatrix(rows, columns) {
        const matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix.push(new Array(columns).fill(0));
        }
        return matrix;
        }
    }

const final = new Matrix(2, 2)
console.log(final.rows);
console.log(final.columns);
console.log(final.elements);



/*console.log(this.rows);
console.log(this.columns);

const two_d_array = [
    [6, 5],
    [9, 8]
]

console.log(two_d_array[0][0], two_d_array[0][1])
console.log(two_d_array[1][0], two_d_array[1][1])*/









