function rollDiceGame() {
    let diceMap = new Map();
    let maxRolls = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = Math.floor(Math.random() * 6) + 1; // Generates number between 1-6
        diceMap.set(roll, (diceMap.get(roll) || 0) + 1);

        // Check if any number has reached maxRolls
        for (let value of diceMap.values()) {
            if (value >= maxRolls) {
                reachedMax = true;
                break;
            }
        }
    }

    // Find numbers with max & min occurrences
    let maxKey, minKey, maxValue = 0, minValue = Infinity;
    for (let [key, value] of diceMap.entries()) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
        if (value < minValue) {
            minValue = value;
            minKey = key;
        }
    }

    console.log("Dice Rolls Count:", Object.fromEntries(diceMap));
    console.log("Number that reached 10 times first:", maxKey);
    console.log("Number that appeared the least:", minKey);
}

// Run the simulation
rollDiceGame();
