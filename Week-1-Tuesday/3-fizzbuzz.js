// 3. FizzBuzz
// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", 
// and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]

// Pseudocode
// Declare the array
// Insert numbers in array
// For loop
// Condition to check if the numbers are divisible
// Else if to replace for strings
// Insert number and strings in the array
// Print it

let newArray = []

for (let i = 1; i <= 135; i++) {
    if (i % 3 === 0) {
        newArray[newArray.length] = "Fizz"
    } else if (i % 5 === 0) {
        newArray[newArray.length] = "Buzz"
    } else if (i % 3 === 0 && i % 5 === 0) {
        newArray[newArray.length] = "FizzBuzz"
    } else {
        newArray[newArray.length] = i
    }
}
console.log(newArray);