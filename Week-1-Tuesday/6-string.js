// Exercise 6
// Communist Censorship
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice.

// Pseudocode: 
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program']
// Need for loop
// Conditional
// Print it

let phraseProgram = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program']

for (let i = 0; i < phraseProgram.length; i++) {
    if (phraseProgram[i] === 'Program') {
        phraseProgram[i] = '*******'
    }
}
console.log(phraseProgram);