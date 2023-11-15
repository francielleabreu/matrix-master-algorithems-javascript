//Pseudocode
//Create a function that's take n array as input
//initialize a variable len to store the length of our array
//Create first loop, it will iterate throe each element of the array
//Create seconde array, it will compare the indexes
//Create an if statement
//return the last result
//Call the function

function bubbleSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j <= len; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]; //swap
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([7, 5, 2, 4, 3, 9])); // [2, 3, 4, 5, 7, 9]
console.log(bubbleSort([9, 7, 5, 4, 3, 1])); // [1, 3, 4, 5, 7, 9]
console.log(bubbleSort([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]