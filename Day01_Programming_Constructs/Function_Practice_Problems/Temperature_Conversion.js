function convertTemperature(value, scale) {
    if (scale === "CtoF") {
        if (value < 0 || value > 100) return "Invalid Input! Temperature out of range.";
        return `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F`;
    } 
    else if (scale === "FtoC") {
        if (value < 32 || value > 212) return "Invalid Input! Temperature out of range.";
        return `${value}°F = ${((value - 32) * 5/9).toFixed(2)}°C`;
    } 
    else {
        return "Invalid Selection! Use 'CtoF' or 'FtoC'.";
    }
}

// Example Usage
console.log(convertTemperature(100, "CtoF")); // 100°C = 212.00°F
console.log(convertTemperature(32, "FtoC"));  // 32°F = 0.00°C
console.log(convertTemperature(150, "CtoF")); // Invalid Input! Temperature out of range.
