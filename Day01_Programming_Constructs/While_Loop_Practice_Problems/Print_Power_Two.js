function powersOfTwo(n) {
    let i = 0;
    let value = 1;

    while (i <= n && value <= 256) {
        console.log(`2^${i} = ${value}`);
        value *= 2;
        i++;
    }
}

let n = parseInt(process.argv[2]);
powersOfTwo(n);
