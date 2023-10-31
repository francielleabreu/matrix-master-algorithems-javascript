// 4. Fibonacci
// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series.
// A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
// 0 1 1 2 3 5 8 13 21...

let previous = 0;
let current = 1;
let sum = 0;

while (current < 1000000) {
    if (current % 2 === 0) {
        sum += current;
    }

    const next = previous + current;
    previous = current;
    current = next;
}

console.log(sum);