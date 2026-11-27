
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

function transmute(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 75) {
        return "Passed";
    } else {
        return "Needs improvement";
    }
}

const scoresToTest = [95, 88, 75, 74, 0];

for (const score of scoresToTest) {
    console.log(`Score ${score}: ${transmute(score)}`);
}

const transmuteArrow = (score) => {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 75) {
        return "Passed";
    } else {
        return "Needs improvement";
    }
};

for (const score of scoresToTest) {
    console.log(`Score ${score}: ${transmute(score)} | Arrow: ${transmuteArrow(score)}`);
}

const classList = [
    { name: "Ana", score: 88, section: "3-A" },
    { name: "Ben", score: 92, section: "3-A" },
    { name: "Cara", score: 70, section: "3-B" },
    { name: "David", score: 85, section: "3-B" },
    { name: "Ella", score: 65, section: "3-A" }
];

const names = classList.map(student => student.name);
console.log("All names:", names);

const passedStudents = classList.filter(student => student.score >= 75);
console.log("Passing students:", passedStudents);

const sectionA = classList
    .filter(student => student.section === "3-A")
    .map(student => `${student.name} — ${student.score}%`);
console.log("Section 3-A:", sectionA);

const total = classList.reduce((sum, student) => sum + student.score, 0);
const average = (total / classList.length).toFixed(2);
console.log("Class average:", average);

console.log("Original class list:", classList);