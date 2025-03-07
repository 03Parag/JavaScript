function primeFactors(n) {
    while (n % 2 === 0) {
        console.log(2);
        n /= 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            console.log(i);
            n /= i;
        }
    }

    if (n > 2) console.log(n);
}

let n = parseInt(process.argv[2]);
primeFactors(n);
