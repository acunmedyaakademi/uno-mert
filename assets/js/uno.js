const colors = ['red', 'blue', 'green', 'yellow'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//76 card olmali

// Uno destesi olusturuluyor
let deck = [];
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 10; j++) {
        deck.push({
            color: colors[i],
            number: numbers[j]
        });
    }
    for (j = 1; j < 10; j++) {
        deck.push({
            color: colors[i],
            number: numbers[j]
        });
    }
}

console.table(deck)
