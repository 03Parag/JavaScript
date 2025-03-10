function getRandom3DigitNumbers(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * 900) + 100); // Random 3-digit number (100-999)
    }
    return arr;
}

// Generate second smallest and largest number
function findSecondLargestSmallest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

// Generate random numbers and find results
let numbers = getRandom3DigitNumbers(10);
console.log("Generated Numbers:", numbers);

let { secondLargest, secondSmallest } = findSecondLargestSmallest(numbers);
console.log("2nd Smallest:", secondSmallest);
console.log("2nd Largest:", secondLargest);
