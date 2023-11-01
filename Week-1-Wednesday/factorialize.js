// Factorialize a Number
// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//Pseudocode
// Declare a function factorialize(n) 
// Declare a variable to store the factorial of the input number
// For loop that iterates from 1 to num
// Inside the loop, it multiplies the current value of factorial by i
// Function returns the calculated factorial stored in the factorial variable.
// Calls the factorialize function with an input.

function factorialize(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorialize(5));

// The console.log will calculate and return the factorial of 5, which is 5! = 1 * 2 * 3 * 4 * 5 = 120.

// Other Outputs:
// console.log(factorialize(0)) - return 1;
// console.log(factorialize(2)) - return 3;
// console.log(factorialize(4)) - return 24;
// console.log(factorialize(5)) - return 120;
// console.log(factorialize(10)) - return 3628800;
// console.log(factorialize(15)) - return 1307674368000;
// console.log(factorialize(20)) - return 2432902008176640000;