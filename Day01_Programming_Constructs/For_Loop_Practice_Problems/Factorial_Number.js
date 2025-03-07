function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    console.log(`${n}! = ${fact}`);
}

let n = parseInt(process.argv[2]);
factorial(n);
