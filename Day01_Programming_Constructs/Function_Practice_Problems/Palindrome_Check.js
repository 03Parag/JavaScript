function isPalindrome(num) {
    let str = num.toString();
    return str === str.split("").reverse().join("");
}

// Example Usage
console.log(isPalindrome(121));  // true
console.log(isPalindrome(123));  // false
console.log(isPalindrome(1221)); // true
