
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// forEach(): display every product
console.log("-- All Products (forEach) --");

products.forEach(function(product) {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// filter(): select products under $50
console.log("\n-- Filtered Products (Price < $50) --");

const filteredProducts = products.filter(
    product => product.price < 50
);

console.log(JSON.stringify(filteredProducts, null, 2));

// map(): create formatted product tags
console.log("\n-- Mapped Product Tags (map) --");

const productTags = products.map(
    product => `${product.name.toUpperCase()} costs $${product.price}`
);

console.log(JSON.stringify(productTags));
