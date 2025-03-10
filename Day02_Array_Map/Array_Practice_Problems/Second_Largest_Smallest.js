// Generate 10 random 3-digit numbers
function getRandom3DigitNumbers(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * 900) + 100); // Random 3-digit number (100-999)
    }
    return arr;
}

// Generate second smallest and second largest using sorted array
function findSecondLargestSmallestSorted(arr) {
    arr.sort((a, b) => a - b); // Sorting in ascending order
    return {
        secondSmallest: arr[1],
        secondLargest: arr[arr.length - 2]
    };
}

// Generate random numbers
let numbers = getRandom3DigitNumbers(10);
console.log("Generated Numbers:", numbers);

// Generate the second smallest and second largest and find the result
let sortedResults = findSecondLargestSmallestSorted(numbers);
console.log("Sorted Array:", numbers);
console.log("2nd Smallest (Sorted):", sortedResults.secondSmallest);
console.log("2nd Largest (Sorted):", sortedResults.secondLargest);
