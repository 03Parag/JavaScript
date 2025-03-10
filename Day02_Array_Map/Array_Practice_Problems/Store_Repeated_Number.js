function findRepeatedDigitNumbers() {
    let repeatedNumbers = [];
    
    for (let i = 10; i <= 99; i++) {
        let strNum = i.toString();
        if (strNum[0] === strNum[1]) {
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

console.log("Numbers with repeated digits:", findRepeatedDigitNumbers());
