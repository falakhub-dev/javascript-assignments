
let score = 85;

// if...else statement
if (score >= 0 && score <= 100) {
    console.log("Score:", score);
} else {
    console.log("Invalid score");
}

// switch statement
let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log("Grade:", grade);

// Ternary operator
let status = score >= 50 ? "Passed" : "Failed";
console.log("Status:", status);
