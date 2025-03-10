function convertLength(value, conversionType) {
    switch (conversionType) {
        case "feet-to-inch":
            return `${value} feet = ${value * 12} inches`;
        case "feet-to-meter":
            return `${value} feet = ${(value * 0.3048).toFixed(2)} meters`;
        case "inch-to-feet":
            return `${value} inches = ${(value / 12).toFixed(2)} feet`;
        case "meter-to-feet":
            return `${value} meters = ${(value / 0.3048).toFixed(2)} feet`;
        default:
            return "Invalid conversion type! Use 'feet-to-inch', 'feet-to-meter', 'inch-to-feet', or 'meter-to-feet'.";
    }
}

// Get input from command line
const args = process.argv.slice(2);
const value = parseFloat(args[0]);
const conversionType = args[1];

console.log(convertLength(value, conversionType));
