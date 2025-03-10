function numberToWeekday(number) {
    switch (number) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3: 
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid input! Enter a number between 1 and 7.";
    }
}

// Get input from command line
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);
console.log(numberToWeekday(num));
