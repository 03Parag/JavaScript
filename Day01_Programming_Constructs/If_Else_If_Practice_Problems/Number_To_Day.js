
function numberToDay(number) {
    // Check if the number is a valid single-digit number
    if (number <= 0 || number >7 || isNaN(number)) {
        return "Please enter a valid single digit number.";
    }

    // Array of words representing the numbers 0-9
    const words = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Return the corresponding word
    return words[number-1];
}

// Get the command-line argument for the number (process.argv[2])
const args = process.argv.slice(2); 
const num = parseInt(args[0], 10);

// Output the word for the entered number
console.log(ConvertIntoWeekName(num));
