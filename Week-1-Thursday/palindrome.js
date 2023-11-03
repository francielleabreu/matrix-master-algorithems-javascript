// Check for Palindromes
// Declare a function isPalindrome(str) that takes a string as an input.

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Pseudocode
// Declare the function
// Declare variables
// Need for loop and while
// Print it

function palindromeChecker(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true
}
let isPalindrome = palindromeChecker("arara"); //true
// let isPalindrome = palindromeChecker("car"); //false
console.log(isPalindrome);