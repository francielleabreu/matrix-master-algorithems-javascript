// Exercise 5
// Find Max
// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

// Pseudocode: 
// Define array X = [2,-3,-1])
// Define a negative variable 
// Conditional: if element < = value
// Print it with text

let values = [2, -3, -1, 10, 25, 1, 58]
let maxValue = -99999

for (let i = 0; i <= values.length; i++) {
    if (values[i] > maxValue) {
        maxValue = values[i]
    }
}
console.log("The maximum value is " + maxValue + ".")