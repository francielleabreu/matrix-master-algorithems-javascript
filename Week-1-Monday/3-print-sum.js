// Exercise 3
// Sum of Printed Numbers
// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:
// Number is: 0 Sum: 0
// Number is: 1 Sum: 1
// Number is: 2 Sum: 3
// Number is: 3 Sum: 6

// Pseudocode: 
// Declare a varibable 
// Need for loop
// Sum the results + new element
// String type number is: 1 Sum: 1
// Print it

let number = 0
for (let i = 0; i <= 135; i++) {
    number = i + number
    let string = "Number is: " + i + " Sum: " + number
    console.log(string)
}

