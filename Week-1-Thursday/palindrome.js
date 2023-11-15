// Check for Palindromes
// Declare a function isPalindrome(str) that takes a string as an input.

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Pseudocode
// Declare the function
// Declare variables
// Need for loop and while
// Print it

function isPalindrome(str) {
    let reveString = [];
    for (let i = 0; i < str.length; i++) {
        reveString[i] = str[str.length - 1 - i];
        // reveString[0] = str[4]
        //  reveString[1]= str[3]
    }
    reveString = reveString.join("");
    if (reveString === str) {
        check = "it is palindrom";
    } else {
        check = "it is not a palindrom";
    }
    return check;
}
console.log(isPalindrome("arara"));
console.log(isPalindrome("kyak"));