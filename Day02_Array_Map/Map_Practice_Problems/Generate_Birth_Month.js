function generateBirthMonths() {
    let birthMap = new Map();

    for (let i = 0; i < 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1; // Random month (1-12)
        if (!birthMap.has(month)) {
            birthMap.set(month, []);
        }
        birthMap.get(month).push(i + 1); // Store person ID
    }

    console.log("Individuals grouped by birth month:");
    for (let [month, people] of birthMap.entries()) {
        console.log(`Month ${month}:`, people);
    }
}

// Generate and group birth months
generateBirthMonths();
