function numberToWord(number) {
    switch (number) {
        case 0: 
            return "Zero";
        case 1: 
             return "One";
        case 2: 
            return "Two";
        case 3: 
            return "Three";
        case 4: 
            return "Four";
        case 5: 
            return "Five";
        case 6: 
            return "Six";
        case 7: 
            return "Seven";
        case 8: 
            return "Eight";
        case 9: 
            return "Nine";
        default:  
            return "Invalid input! Enter a single-digit number (0-9).";
    }
}

// Get input from command line
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);
console.log(numberToWord(num));
