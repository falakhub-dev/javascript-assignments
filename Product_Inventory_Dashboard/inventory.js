
"use strict";

console.log("--- Initializing Inventory System ---");

// 1. Initial inventory: array of objects
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// 2. Functions for input validation and categorization
function validateProduct(name, price) {
    if (!name || name.trim() === "") {
        return false;
    } else if (!Number.isFinite(price) || price <= 0) {
        return false;
    } else {
        return true;
    }
}

// switch statement assigns a category based on price
function getCategory(price) {
    switch (true) {
        case price < 50:
            return "Budget";
        case price < 200:
            return "Standard";
        default:
            return "Premium";
    }
}

// 3. Get user input with prompt()
let productName = prompt("Enter new product name:", "Monitor");
let priceInput = prompt("Enter product price:", "150");

// Explicit type conversion
let productPrice = Number(priceInput);

// Check and handle invalid input
if (productName === null || priceInput === null) {
    console.log("Input cancelled. No new product added.");
} else if (!validateProduct(productName, productPrice)) {
    console.log("Invalid product name or price. Product not added.");
} else {
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    console.log(
        `[Prompt executed: User adds "${productName.trim()}" at "$${productPrice}"]`
    );
}

// 4. Search inventory using a loop, break, and continue
let searchName = "Monitor";
let foundProduct = null;

for (let i = 0; i < inventory.length; i++) {
    if (!inventory[i].name) {
        continue;
    }

    if (inventory[i].name.toLowerCase() === searchName.toLowerCase()) {
        foundProduct = inventory[i];
        break;
    }
}

if (foundProduct !== null) {
    console.log("Search result:", foundProduct.name, "found.");
} else {
    console.log("Search result:", searchName, "not found.");
}

// 5. Process the inventory using forEach()
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach((product) => {
    product.category = getCategory(product.price);

    console.log(
        `* Item: ${product.name} ($${product.price}) -> Category: ${product.category}`
    );
});

// 6. Functions for financial analytics
function calculateTotal(items) {
    let total = 0;

    items.forEach((product) => {
        total += product.price;
    });

    return total;
}

// Arrow function with custom tax and discount parameters
const calculateFinalPrice = (price, taxRate = 0, discountRate = 0) => {
    const tax = price * taxRate;
    const discount = price * discountRate;

    return price + tax - discount;
};

// Demonstrate custom tax and discount without changing inventory prices
const exampleFinalPrice = calculateFinalPrice(100, 0.10, 0.05);
console.log("Example final price ($100 with 10% tax and 5% discount):",
    exampleFinalPrice.toFixed(2)
);

// 7. filter() isolates products under $200
const affordableProducts = inventory.filter(
    (product) => product.price < 200
);

// 8. map() creates formatted report strings
const reportList = inventory.map(
    (product) => `${product.name.toUpperCase()}: $${product.price}`
);

// 9. Final analytics report
console.log("\n--- Financial Analytics ---");
console.log("Total Inventory Value: $" + calculateTotal(inventory));
console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableProducts.map((product) => product.name))
);
console.log("Formatted Report List:", JSON.stringify(reportList));
