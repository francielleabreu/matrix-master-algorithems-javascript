// Exercise 5
// Remove the Negative
// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// Pseudocode: 
// Given the array X =[1, -2, 4, 1]  
// Declare empty array
// Need for loop
// Conditional
// Remove and create new array
// Print it

let values = [1, -2, 4, 1]
let newArray = []

for (let i = 0; i < values.length; i++) {
    if (values[i] > 0) {
        newArray.push(values[i])
    }
}
console.log(newArray);