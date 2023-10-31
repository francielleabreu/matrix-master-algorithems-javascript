// Exercise 4
// Print the elements of an array
// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

// Pseudocode: 
// Given an array
// Check every element in the array
// Print it

let printNumbers = [1, 4, 2, 12, 22, 34, 44, 55]

for (let i = 0; i <= printNumbers.length; i++) {
    let element = printNumbers[i]
    console.log(element)
}