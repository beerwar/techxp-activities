
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