
 // Standard function with default parameters
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

// Arrow function with default parameters
const calculateArea = (length = 5, width = 4) => {
    return length * width;
};

console.log(
    "Standard Function Area (Default 5x4):",
    rectangleArea()
);

console.log(
    "Arrow Function Area (Custom 10x3):",
    calculateArea(10, 3)
);

// Demonstrate block scope
{
    let blockVar = "I exist only inside this block";
    console.log("Inside block:", blockVar);
}

// Accessing a block-scoped variable outside its block
try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error:", error.toString());
}
