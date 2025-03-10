const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMagicNumber(low, high) {
    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        readline.question(`Is your number less than or equal to ${mid}? (yes/no): `, (answer) => {
            if (answer.toLowerCase() === "yes") {
                high = mid;
            } else {
                low = mid + 1;
            }

            if (low === high) {
                console.log(`Your magic number is ${low}`);
                readline.close();
            } else {
                findMagicNumber(low, high);
            }
        });
        return;
    }
}

console.log("Think of a number between 1 and 100.");
findMagicNumber(1, 100);
