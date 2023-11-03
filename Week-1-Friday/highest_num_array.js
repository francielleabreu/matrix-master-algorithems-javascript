// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

// Example:
// Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11

// Pseudocode:
// Declare variables
// Need loop
// Condition if/else
// Print it

let values = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
let firstValues = -9999;
let secondValues = -9999;
let thirdValues = -9999;

for (i = 0; i <= values.length; i++) {
    if (values[i] > firstValues) {
        thirdValues = secondValues
        secondValues = firstValues
        firstValues = values[i]
    } else if (values[i] > secondValues) {
        thirdValues = secondValues
        secondValues = values[i]
    } else if (values[i] > thirdValues) {
        thirdValues = values[i]
    }
}
console.log(thirdValues);