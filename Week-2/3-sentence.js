// Wednesday : Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

// For this algorithm, you can use the split() method.

// titleCase("I'm a little tea pot")should return a string.
// titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".

// Pseudocode
// Function
// Use split
// For loop first word capitalized 
// Use method for the result
// Print it

function titleCase(str) {
    const words = str.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    const result = words.join(" ");

    return result;
}

console.log(titleCase("I'm a little tea pot"));  // I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));  // Short And Stout