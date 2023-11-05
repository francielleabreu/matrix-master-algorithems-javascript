// Monday: Largest Number in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Pseudocode
// Declare function
// Empty array
// Need for loop
// Method push
// Variable for the array
// Print it

function largestOfFour(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let largest = arr[i][0];
        for (let e = 1; e < arr[i].length; e++) {
            if (arr[i][e] > largest) {
                largest = arr[i][e]
            }
        }
        result[i] = largest;
    }
    return result;
}
let largestOfNumber = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(largestOfNumber)//Returns [5,27,39,1001]