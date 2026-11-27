
const name = "Beerwar";

// Caused a SyntaxError by removing the closing parenthesis.
console.log(`Hello, ${name}! Welcome to JavaScript.`);

let score = 0;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 75) {
    console.log("Passed");
} else {
    console.log("Needs improvement");
}

console.log(`Passed: ${score >= 75}`);

const qty = "5";
const price = 20;

console.log(qty + price); // Produces "520" because + joins a string and a number.

console.log(Number(qty) * price); // Converts qty to a number it produces 100.

console.log(qty == 5); //true
console.log(qty === 5); //fase

// Use === because it compares both value and data type without implicit conversion.