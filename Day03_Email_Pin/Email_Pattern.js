// Regex pattern covering all UCs
const emailPattern = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

// Test Cases
const testCases = [
    "abc@bridgelabz.co",          // Valid (UC1, UC2, UC3)
    "abc.xyz@bridgelabz.co",      // Valid (UC4 - optional middle part with allowed characters)
    "abc-xyz@bridgelabz.co.in",   // Valid (UC5 - optional country code in the end)
    "abc+xyz@bridgelabz.co.us",   // Valid (UC5 - valid special characters in xyz)
    "abc@bridgelabz.com",         // Invalid (UC3 - missing '.co')
    "abcxyz@bridgelabz.co.in",    // Invalid (UC4 - missing special character before xyz)
    "abc.@bridgelabz.co",         // Invalid (UC4 - dot should be followed by valid characters)
    "abc@bridgelabz",             // Invalid (UC3 - missing .co)
    "abc@bridgelabz.c",           // Invalid (UC5 - TLD should be 2 characters)
    "abc@bridgelabz.co.inn",      // Invalid (UC5 - TLD cannot be more than 2 characters)
    "@bridgelabz.co.in",          // Invalid (UC1 - missing mandatory 'abc')
    "abc@xyz.bridgelabz.co.in",   // Invalid (UC2 - '@' should be directly before 'bridgelabz')
];

// Validate and Print Results
for (let i = 0; i < testCases.length; i++) {
    let email = testCases[i];
    let isValid = emailPattern.test(email);
    
    if (isValid) {
        console.log(email + " -> Valid");
    } else {
        console.log(email + " -> Invalid");
    }
}
