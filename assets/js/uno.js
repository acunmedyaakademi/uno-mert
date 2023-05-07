const colors = ['red', 'blue', 'green', 'yellow'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const startBtn = document.getElementById('start');
const midCardBack = document.getElementById('midCardBack');
const midCardFront = document.getElementById('midCard');
const playerOne = document.getElementById('playerOne');
const playerTwo = document.getElementById('playerTwo');
const playerThree = document.getElementById('playerThree');
const playerFour = document.getElementById('playerFour');
const playerOneHand = document.getElementById('playerOneHand');
const playerTwoHand = document.getElementById('playerTwoHand');
const playerThreeHand = document.getElementById('playerThreeHand');
const playerFourHand = document.getElementById('playerFourHand');

// const playerOneCards = document.querySelectorAll()





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
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//? Kart karistirma


let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];
let player1CardID = 0;
let player2CardID = 0;
let player3CardID = 0;
let player4CardID = 0;


function startGame() {
    if (openCard.length == 0) {

        shuffle(deck);
        // console.table(deck);


        //TODO: 7 kart oyunculara dagitiliyor
        //TODO: 1 kart acik olarak ortaya konuluyor


        //TODO: Kartlarin oyuncaların eline dagitilmasi



        for (let i = 0; i < 7; i++) {
            player1.push(deck[i]);
            let div = document.createElement("div");
            player1CardID++;
            div.classList.add("card");
            div.style.backgroundColor = deck[i].color;
            div.classList.add("display");
            div.innerText = deck[i].number;
            div.id = player1CardID;
            playerOneHand.appendChild(div);
            deck.shift(); //! ilk elemani siler
        }
        for (let i = 7; i < 14; i++) {
            player2.push(deck[i]);
            let div = document.createElement("div");
            div.classList.add("card");
            div.style.backgroundImage = "url('assets/images/png/uno-card-back.png')";
            // div.style.backgroundColor = deck[i].color;
            div.classList.add("display");
            // div.innerText = deck[i].number;
            playerTwoHand.appendChild(div);
            deck.shift();
        }
        for (let i = 14; i < 21; i++) {
            player3.push(deck[i]);
            let div = document.createElement("div");
            div.classList.add("card");
            div.style.backgroundColor = deck[i].color;
            div.classList.add("display");
            div.innerText = deck[i].number;
            playerThreeHand.appendChild(div);
            deck.shift();
        }
        for (let i = 21; i < 28; i++) {
            player4.push(deck[i]);
            let div = document.createElement("div");
            div.classList.add("card");
            div.style.backgroundColor = deck[i].color;
            div.innerText = deck[i].number;
            div.classList.add("display");
            playerFourHand.appendChild(div);
            deck.shift();
        }

        // console.table(player1);
        // console.table(player2);
        // console.table(player3);
        // console.table(player4);

        //? 7 kart oyunculara dagitildi


        for (let i = 28; i < 29; i++) {
            openCard = deck[i];
            midCardBack.classList.add("none");
            midCardFront.classList.add("display");
            midCardFront.style.backgroundColor = deck[i].color;
            midCardFront.innerText = deck[i].number;
            // console.log(openCard);
            deck.shift();
        }
        //? 1 kart acik olarak ortaya konuldu

    }
    else {
        alert("Oyun zaten baslamış");
    }
    currentPlayer = 0;
    //* Kartlarin karistirilmasi
    function game(e) {
        currentPlayer++;
        if (currentPlayer == 1) {
            playerOneHand.addEventListener('click', function (e) {
                let card = e.target;
                let cardColor = card.style.backgroundColor;
                let cardNumber = card.innerText;
                let cardID = card.id;
                if (e.target.classList.contains('card')) {
                    if (cardColor == openCard.color || cardNumber == openCard.number) {
                        openCard = {
                            color: cardColor,
                            number: cardNumber
                        }
                        midCardFront.style.backgroundColor = cardColor;
                        midCardFront.innerText = cardNumber;
                        console.log(e.target)
                        card.remove();
                        player1.splice((cardID - 1), 1);
                        currentPlayer++;
                        console.log(currentPlayer);
                    }
                    else {
                        alert("Bu kartı oynayamazsınız");
                    }
                }
            });
        }
        else if (currentPlayer == 2) {
            alert("dneeme")
        }
        else {
            alert("Sıra sizde değil");
        }
    }
    game();
}

let currentPlayer = [player1, player2, player3, player4];

//TODO: Hangi oyuncuda oldugu kontorolu yapilacak
//TODO: Oyuncuya gelince kartları gozukcek

function displayCards(player) {
    for (let i = 0; i < player.length; i++) {
        let div = document.createElement("div");
        div.classList.add("card");
        div.style.backgroundColor = player[i].color;
        div.classList.add("display");
        div.innerText = player[i].number;
        playerOneHand.appendChild(div);
    }
}



console.log(currentPlayer)




