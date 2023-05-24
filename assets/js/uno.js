const colors = ['red', 'blue', 'green', 'yellow'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const startBtn = document.getElementById('start');
const midCardFront = document.getElementById('midCard');
const playerOne = document.getElementById('playerOne');
const playerTwo = document.getElementById('playerTwo');
const playerThree = document.getElementById('playerThree');
const playerFour = document.getElementById('playerFour');
const playerOneHand = document.getElementById('playerOneHand');
const playerTwoHand = document.getElementById('playerTwoHand');
const playerThreeHand = document.getElementById('playerThreeHand');
const playerFourHand = document.getElementById('playerFourHand');
const resetBtn = document.getElementById('restart');
const playerOneCardDiv = document.getElementById('playerOneCardDiv');
const playerDrawOne = document.getElementById('playerDrawOne');




let finish = false;
let howMany = 0;

let player1 = {
    playerName: 'Player1',
    isActive: true,
    playerCards: []
};

let player2 = {
    playerName: 'Player2',
    isActive: false,
    playerCards: [],
};
let player3 = {
    playerName: 'Player3',
    isActive: false,
    playerCards: [],
};
let player4 = {
    playerName: 'Player4',
    isActive: false,
    playerCards: [],
};
let player1CardID = 0;
let player2CardID = 0;
let player3CardID = 0;
let player4CardID = 0;
// const playerOneCards = document.querySelectorAll()

startBtn.addEventListener('click', startGame);

//76 card olmali
// Uno destesi olusturuluyor
let deck = [];
let openCard = [];

resetBtn.addEventListener('click', function () {
    location.reload();
});

function createDeck() {
    for (let i = 0; i < 4; i++) {
        let cardID = 0;
        for (let j = 0; j < 10; j++) {
            deck.push({
                cardID: cardID++,
                color: colors[i],
                number: numbers[j],
            });
        }

        //? 0 dan her renkte 1 tane olacak
        for (j = 1; j < 10; j++) {
            deck.push({
                cardID: cardID++,
                color: colors[i],
                number: numbers[j],
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
}


// TODO: Kart karistirma
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//? Kart karistirma


function createCard(cardID, color, number) {
    return `<div class="card display" data-color="${color}" data-number="${number}" id="${cardID}" style="background-color:${color};">${number}</div>`
}

function createCardPlayerOne(cardID, color, number) {
    return `<div class="card display player1Card" data-color="${color}" data-number="${number}" id="${cardID}" style="background-color:${color};">${number}</div>`
}

function createCardMid(color, number) {
    return `<div class="midCards display" data-color="${color}" data-number="${number}" style="background-color:${color};z-index: 1;">${number}</div>`
}



function startGame() {
    createDeck();
    if (openCard.length == 0) {
        shuffle(deck);
        //* Kartlarin karistirilmasi
        // console.table(deck);

        //TODO: 7 kart oyunculara dagitiliyor
        //TODO: 1 kart acik olarak ortaya konuluyor

        //TODO: Kartlarin oyuncaların eline dagitilmasi

        for (let i = 0; i < 7; i++) {
            player1.playerCards.push(deck.shift());
            player1CardID++;
            // deck.shift(); //! ilk elemani siler
        }
        for (let i = 7; i < 14; i++) {
            player2.playerCards.push(deck.shift());
            player2CardID++;
            // div.style.backgroundImage = "url('assets/images/png/uno-card-back.png')";
        }
        for (let i = 14; i < 21; i++) {
            player3.playerCards.push(deck.shift());
            player3CardID++;
        }
        for (let i = 21; i < 28; i++) {
            player4.playerCards.push(deck.shift());
            player4CardID++;

        }

        // console.log(player1);
        // console.table(player2);
        // console.table(player3);
        // console.table(player4);

        //? 7 kart oyunculara dagitildi
        for (let i = 28; i < 29; i++) {
            openCard = deck.shift();
            // midCardFront.classList.add('display');
            // midCardFront.style.backgroundColor = deck[i].color;
            // midCardFront.innerText = deck[i].number;
            // midCardFront.style.zIndex = '1';
            // console.log(openCard);
        }
        //? 1 kart acik olarak ortaya konuldu

        for (let card of player1.playerCards) {
            playerOneHand.innerHTML += createCardPlayerOne(card.cardID, card.color, card.number);
        }
        for (let card of player2.playerCards) {
            playerTwoHand.innerHTML += createCard("player2CardDiv", card.color, card.number);
        }
        for (let card of player3.playerCards) {
            playerThreeHand.innerHTML += createCard("player3CardDiv", card.color, card.number);
        }
        for (let card of player4.playerCards) {
            playerFourHand.innerHTML += createCard("player4CardDiv", card.color, card.number);
        }
        midCardFront.innerHTML += createCardMid(openCard.color, openCard.number);
        //? Kartlar oyuncularin eline dagitildi
        let cardElements = document.querySelectorAll('.player1Card');
        for (let cardElement of cardElements) {
            cardElement.addEventListener('click', playCard);
        }
    }
    else {
        alert('Oyun zaten baslamış');
    }

}


//TODO: Hangi oyuncuda oldugu kontorolu yapilacak
//TODO: 1.Oyuncunun karti varsa oynayabilecek(karta basarak yere atacak)
//TODO: 1.Oyuncunun karti yoksa kart cekicek(baska bir butona basınca kart cekebilir)
//TODO: Diger oyuncularin kartlari otomatik kontrol edilecek ve oynayabilecek kart varsa oynayacak
//TODO: Diger oyuncularin elinde kart yok ise kart cekicek ve oynayabilecek kart varsa oynayacak
//TODO: Oyun bir kere calisacak ve herhangi bir oyuncu kartlarini bitirdiginde oyun bitecek
//TODO: Oyun bittiginde oyunu bitiren oyuncu belirlenecek




function isCardPlayable(cardColor, cardNumber) {
    if (openCard.color === cardColor || openCard.number === cardNumber) {
        return true;
    }
    return false;
}

let isDeckUsed = false;

function playCard() {
    if (!isCardPlayable(this.dataset.color, this.dataset.number)) {
        return;
    }
    debugger;
    if (this.parentNode.classList.contains('table')) {
        return;
    }





    midCardFront.appendChild(this);
    this.classList.remove('card', 'player1Card');
    this.classList.add('midCards');
    openCard.color = this.dataset.color;
    openCard.number = this.dataset.number;

}