function arithmeticOperations(a, b, c) {
    // Validate input numbers
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "Please enter three valid numbers.";
    }

    // Perform calculations
    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;

    // Store results in an array
    let results = [result1, result2, result3, result4];

    // Find max and min
    let maxResult = Math.max(...results);
    let minResult = Math.min(...results);

    // Display results
    console.log(`Operation Results:`);
    console.log(`1. ${a} + ${b} * ${c} = ${result1}`);
    console.log(`2. ${a} % ${b} + ${c} = ${result2}`);
    console.log(`3. ${c} + ${a} / ${b} = ${result3}`);
    console.log(`4. ${a} * ${b} + ${c} = ${result4}`);
    console.log(`Maximum: ${maxResult}`);
    console.log(`Minimum: ${minResult}`);
}

// Get the command-line arguments
const args = process.argv.slice(2);
const a = parseInt(args[0], 10);
const b = parseInt(args[1], 10);
const c = parseInt(args[2], 10);

// Perform calculations
PerformArithmeticOperations(a, b, c);
