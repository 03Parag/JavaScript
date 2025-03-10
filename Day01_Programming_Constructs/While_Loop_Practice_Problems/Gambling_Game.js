function gamblerGame() {
    let money = 100;
    let bets = 0, wins = 0;

    while (money > 0 && money < 200) {
        bets++;
        let betResult = Math.random() < 0.5; // 50% chance of winning

        if (betResult) {
            money++; // Win Rs 1
            wins++;
        } else {
            money--; // Lose Rs 1
        }

        console.log(`Money: Rs ${money} | Bets: ${bets} | Wins: ${wins}`);
    }

    console.log(`Game Over! ${money === 200 ? "Goal reached!" : "Broke!"}`);
    console.log(`Total Bets: ${bets}, Wins: ${wins}`);
}

gamblerGame();
