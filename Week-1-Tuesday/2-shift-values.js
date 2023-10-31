// Exercise 2
// Shift the Values
// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// Pseudocode: 
// Given the array X =[2,1,6,4,-7]  
// Declare empty array
// Need for loop
// Use method push
// Print it

let numbers = [2, 1, 6, 4, -7]
let newArray = []

for (let i = numbers.length-1; i >= 0; i--) {
    newArray.push(numbers[i])
}
console.log(newArray);