// Exercise 7
// Eliminate the Negatives
// Given an array X, write a program that will remove all negative numbers and replace them with a 0. 
// For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

// Pseudocode: 
// Given the array X =[2,-1,4,-3]  
// Need for loop
// If number < 0 replace with 0
// Print it

let values = [2, -1, 4, -3]

for (let i = 0; i < values.length; i++) {
    if (values[i] < 0) {
        values[i] = 0
    }
}
console.log(values);