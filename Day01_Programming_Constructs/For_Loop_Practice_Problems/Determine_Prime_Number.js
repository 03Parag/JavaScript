function isPrime(n) {
    if (n < 2) return console.log(`${n} is not prime`);

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return console.log(`${n} is not prime`);
    }

    console.log(`${n} is prime`);
}

let n = parseInt(process.argv[2]);
isPrime(n);
