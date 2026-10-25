
console.log("-- Multiplication Table of 5 --");

// for loop
for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n-- First number > 10 divisible by 6 --");

// while loop with break
let number = 11;

while (true) {
    if (number > 10 && number % 6 === 0) {
        console.log("Found:", number);
        break;
    }

    number++;
}

console.log("\n-- do...while loop with continue --");

// do...while loop skips number 3
let i = 0;

do {
    i++;

    if (i === 3) {
        continue;
    }

    console.log("Number:", i);
} while (i < 5);
