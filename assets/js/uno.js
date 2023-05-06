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


    //? 0 dan her renkte 1 tane olacak
    for (j = 1; j < 10; j++) {
        deck.push({
            color: colors[i],
            number: numbers[j]
        });
    }
    //* 0 kart 1 tane eklendi
}
// console.table(deck);


// TODO: 0 kart kontrolu

// function zero(card) {
//     return card.number === '0';
// }

// const zeroCards = deck.filter(zero);
// console.table(zeroCards);

//* 0 kartlarin kontrolu


// TODO: Kart karistirma

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
shuffle(deck);

//* Kartlarin karistirilmasi




console.table(deck);


