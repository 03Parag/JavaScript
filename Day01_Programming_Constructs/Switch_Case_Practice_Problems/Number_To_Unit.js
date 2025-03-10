function numberToPlaceValue(number) {
    switch (number) {
        case 1:
            return "Unit";
        case 10:
            return "Ten";
        case 100:
            return "Hundred";
        case 1000:
            return "Thousand";
        case 10000:
            return "Ten Thousand";
        case 100000:
            return "Lakh";
        case 1000000:
            return "Million";
        default:
            return "Invalid input! Enter a power of 10 (1, 10, 100, etc.).";
    }
}

// Get input from command line
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);
console.log(numberToPlaceValue(num));
