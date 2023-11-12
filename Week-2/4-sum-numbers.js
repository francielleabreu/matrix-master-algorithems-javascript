// Thursday: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// function sumAll(arr) {
//   return 1;
// }
// sumAll([1, 4]);

// The lowest number will not always come first.


// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.

// Pseudoce
// Creat a function
// If statement
// Creat a varibale for the result
// Creat a loop from min - max
// Return result
// Print it

// function sumAll(arr) {
//     let firstNumber = Math.max(...arr)
//     let secondNumber = Math.min(...arr)
//     let total = firstNumber + secondNumber

//     for (let i = secondNumber + 1; i < firstNumber; i++) {
//         total += i
//     }

//     return total
// }

// console.log(sumAll([1, 4]));// Return 10
// console.log(sumAll([4, 1]));// Return 10
// console.log(sumAll([5, 10]));// Return 45

function sumAll(arr) {
    let value1 = arr[0]
    let value2 = arr[1]

    let min = 0
    let max = 0
    if(value1 >= value2) {
        max = value1
        min = value2
    } else {
        max = value2
        min = value1
    }
    let sumResult = 0;

    for (let i = min; i <= max; i++) {
        sumResult += i
    }

    return sumResult;
}

console.log(sumAll([1, 4]));// Return 10
console.log(sumAll([4, 1]));// Return 10
console.log(sumAll([5, 10]));// Return 45