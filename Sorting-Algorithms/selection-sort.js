// Tuesday : Selection Sort
// Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.
// Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.
// thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.

// Pseudocode
// Create function 
// Need for loop
// Create two variable
// Creat second loop
// If statement
// Loop to check
// return 
// print it

const selectionSort = (arr) => {
   for (let i = 0; i < arr.length; i++) {
      let lowestValue = arr[i];
      let indexOfLowestValue = i;

      for (let j = i; j < arr.length; j++) {
         if (arr[j] < lowestValue) {
            lowestValue = arr[j];
            indexOfLowestValue = j;
         }
      }
      let temp = arr[i];
      arr[i] = arr[indexOfLowestValue]
      arr[indexOfLowestValue] = temp;
   }
   return arr;
}

console.log(selectionSort([5, -1, 9, 3, -7]));