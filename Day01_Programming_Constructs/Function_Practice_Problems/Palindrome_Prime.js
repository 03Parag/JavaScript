// Function to check if a number is prime
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

// Function to check if number and its palindrome are both prime
function primeAndPalindromeCheck(num) {
    if (!isPrime(num)) {
        console.log(`${num} is not a prime number.`);
        return;
    }

    let palindrome = getPalindrome(num);
    if (isPrime(palindrome)) {
        console.log(`${num} is a prime number. Its palindrome ${palindrome} is also prime.`);
    } else {
        console.log(`${num} is a prime number. But its palindrome ${palindrome} is not prime.`);
    }
}

// Get user input from command-line arguments
const num = parseInt(process.argv[2], 10);

// Check if input is valid
if (isNaN(num)) {
    console.log("Invalid input! Please enter a valid number.");
} else {
    primeAndPalindromeCheck(num);
}
