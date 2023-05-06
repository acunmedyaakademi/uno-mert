const colors = ['red', 'blue', 'green', 'yellow'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const startBtn = document.getElementById('start');
const midCardBack = document.getElementById('midCardBack');
const midCardFront = document.getElementById('midCard');

startBtn.addEventListener('click', startGame);


//76 card olmali

// Uno destesi olusturuluyor
let deck = [];
let openCard = []

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


if (openCard.length == 0) {
    console.log("first")
}
else {
    console.log("as")
}

function startGame() {
    if (openCard.length == 0) {
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        shuffle(deck);
        console.table(deck);


        //TODO: 7 kart oyunculara dagitiliyor
        //TODO: 1 kart acik olarak ortaya konuluyor

        let player1 = [];
        let player2 = [];
        let player3 = [];
        let player4 = [];

        for (let i = 0; i < 7; i++) {
            player1.push(deck[i]);
        }
        for (let i = 7; i < 14; i++) {
            player2.push(deck[i]);
        }
        for (let i = 14; i < 21; i++) {
            player3.push(deck[i]);
        }
        for (let i = 21; i < 28; i++) {
            player4.push(deck[i]);
        }
        console.table(player1);
        console.table(player2);
        console.table(player3);
        console.table(player4);

        //? 7 kart oyunculara dagitildi


        for (let i = 28; i < 29; i++) {
            openCard = deck[i];
            midCardBack.style.display = 'none';
            midCardFront.style.backgroundColor = deck[i].color;
            midCardFront.innerText = deck[i].number;
            console.log(openCard);
        }
        //? 1 kart acik olarak ortaya konuldu

    }
    else {
        alert("Oyun zaten baslamış");
    }

    //* Kartlarin karistirilmasi
}




