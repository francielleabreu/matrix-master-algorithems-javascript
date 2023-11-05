// Tuesday: Find the longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number. For these algorithms you are allowed to use the split() method.

// findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
// findLongestWord("May the force be with you") should return 5.

// Pseudoce
// Declare function
// Variables and method split
// Neef for loo´
// Print it

function longestWordString(str) {
    let words = str.split(' ');

    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
        let wordCounting = words[i];
        if (wordCounting.length > longestLength) {
            longestLength = wordCounting.length;
        }
    }
    return longestLength;
}

console.log(longestWordString("The quick brown fox jumped over the lazy dog")); // Result: 6 (word "jumped")
console.log(longestWordString("May the force be with you")); // Result: 5 (word "force")