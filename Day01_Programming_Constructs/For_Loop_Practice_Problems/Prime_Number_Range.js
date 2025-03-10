function primeInRange(start, end) {
    for (let num = Math.max(2, start); num <= end; num++) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(num);
    }
}

let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);
primeInRange(start, end);
