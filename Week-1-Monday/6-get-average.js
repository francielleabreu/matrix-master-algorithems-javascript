// Exercise 6
// Get Average
// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

// Pseudocode: 
// Given the array X = [2,1,3] 
// Need for loop
// Average sum of the values divided per lenght
// Print it

let values = [2, 1, 3]
let sum = 0

for (let i = 0; i < values.length; i++) {
    sum = sum + values[i]
}
let average = sum / values.length
console.log(average)