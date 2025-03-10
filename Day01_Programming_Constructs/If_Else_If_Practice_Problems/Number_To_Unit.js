function numberToUnit(number) {
    // Check if the number is a power of 10
    if (![1, 10, 100, 1000, 10000, 100000, 1000000].includes(number) || isNaN(number)) {
        return "Please enter a valid place value (1, 10, 100, 1000, etc.).";
    }

    // Array of place values
    const placeValues = ["Unit", "Ten", "Hundred", "Thousand", "Ten Thousand", "Lakh", "Million"];

    // Find index
    const index = Math.log10(number);

    // Return the corresponding place value
    return placeValues[index];
}

// Get the command-line argument
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

// Output the place value
console.log(ConvertIntoPlaceValue(num));
