function primeFactors(n) {
    let factors = [];
    
    // Divide by 2 until odd
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Check for odd factors from 3 onwards
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If remaining n is a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

let num = 56; 
console.log(`Prime Factors of ${num}:`, primeFactors(num));
