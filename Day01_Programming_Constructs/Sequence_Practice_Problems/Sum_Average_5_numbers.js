let sum = 0;
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 90) + 10; // Generates a 2-digit number (10-99)
    console.log(`Number ${i + 1}: ${num}`);
    sum += num;
}
let avg = sum / 5;
console.log(`Sum: ${sum}, Average: ${avg}`);
