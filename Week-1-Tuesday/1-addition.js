// Exercise 1
// Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

// Pseudocode: 
// Need for loop
// Conditional
// If divisible by 3 or 5, but not both 3 and 5
// Sum of values
// Print it

let sum = 0;

for (let i = 200; i <= 2700; i++) {
    let printedNumber = false
    if (i % 3 === 0) {
        printedNumber = true
    }
    if (i % 5 === 0) {
        if (printedNumber) {
            printedNumber = false
        } else {
            printedNumber = true
        }
    }
    if (printedNumber) {
        sum = sum + i
    }
}
console.log("The result of the sum of numbers divisible by 3 and 5, but not both 3 and 5, is " + sum + ".")