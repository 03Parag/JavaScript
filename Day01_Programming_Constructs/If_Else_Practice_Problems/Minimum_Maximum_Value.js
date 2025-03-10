// Generate 5 random 3-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100);
}

// Find min and max values
let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);
