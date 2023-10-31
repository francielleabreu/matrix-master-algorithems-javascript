// Exercise 8
// Number to String
// Write a program that takes an array of numbers and turns the negative values to strings. 
// For example, for array X = [1,-4,0,-1] the output should be [1,'Turing', 0,'Turing'].

// Pseudocode: 
// Given the array X =[1,-4,0,-1]  
// Need for loop
// If number < 0 replace with a string
// Print it

let values = [1,-4,0,-1]

for (let i = 0; i < values.length; i++) {
    if (values[i] < 0) {
        values[i] = 'Turing'
    }
}
console.log(values);