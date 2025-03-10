function numberToWord(number) {
    // Check if the number is a valid single-digit number
    if (number < 0 || number > 9 || isNaN(number)) {
        return "Please enter a valid single digit number.";
    }

    // Array of words representing the numbers 0-9
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

    // Return the corresponding word
    return words[number];
}

// Get the command-line argument for the number (process.argv[2])
const args = process.argv.slice(2); 
const num = parseInt(args[0], 10);

// Output the word for the entered number
console.log(numberToWord(num));
