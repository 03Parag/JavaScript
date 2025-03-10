// a. If 12 inches = 1 foot, convert 42 inches to feet
function inchesToFeet(inches) {
    return inches / 12;
}

let inches = 42;
let feet = inchesToFeet(inches);
console.log(`${inches} inches = ${feet} feet`);

// b. Convert the dimensions of a rectangular plot (60 feet x 40 feet) into meters
function feetToMeters(feet) {
    return feet * 0.3048;
}

let lengthFeet = 60;
let widthFeet = 40;

let lengthMeters = feetToMeters(lengthFeet);
let widthMeters = feetToMeters(widthFeet);

console.log(`Dimensions of the rectangular plot: ${lengthFeet} feet x ${widthFeet} feet = ${lengthMeters} meters x ${widthMeters} meters`);

// c. Calculate the area of 25 such plots in acres
function squareFeetToAcres(squareFeet) {
    return squareFeet / 43560; // 1 acre = 43,560 square feet
}

let areaOfOnePlotFeet = lengthFeet * widthFeet;
let areaOfTwentyFivePlotsFeet = areaOfOnePlotFeet * 25;

let areaInAcres = squareFeetToAcres(areaOfTwentyFivePlotsFeet);
console.log(`Area of 25 such plots = ${areaInAcres} acres`);
