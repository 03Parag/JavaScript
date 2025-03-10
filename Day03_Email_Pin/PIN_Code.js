const pinCodePattern = /^[1-9][0-9]{2}\s?[0-9]{3}$/;

// Test Cases
const testCases = [
    "400088",   // Valid (UC1)
    "A400088",  // Invalid (UC2 - Starts with alphabet)
    "400088B",  // Invalid (UC3 - Ends with alphabet)
    "400 088",  // Valid (UC4 - Allows space in the middle)
    "040088",   // Invalid (Starts with 0)
    "40008",    // Invalid (Less than 6 digits)
    "4000889",  // Invalid (More than 6 digits)
    "400-088",  // Invalid (Special character '-')
    "4O0088"    // Invalid (Contains letter 'O' instead of zero)
];

// Validate and Print Results using for loop
for (let i = 0; i < testCases.length; i++) {
    let pin = testCases[i];
    let isValid = pinCodePattern.test(pin);
    
    if (isValid) {
        console.log(pin + " -> Valid");
    } else {
        console.log(pin + " -> Invalid");
    }
}
