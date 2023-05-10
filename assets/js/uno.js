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

function startGame() {
    createDeck();
    if (openCard.length == 0) {
        shuffle(deck);
        // console.table(deck);

        //TODO: 7 kart oyunculara dagitiliyor
        //TODO: 1 kart acik olarak ortaya konuluyor

        //TODO: Kartlarin oyuncaların eline dagitilmasi

        for (let i = 0; i < 7; i++) {
            player1.playerCards.push(deck[i]);
            let div = document.createElement('div');
            player1CardID++;
            div.classList.add('card');
            div.style.backgroundColor = deck[i].color;
            div.classList.add('display');
            div.innerText = deck[i].number;
            div.id = deck[i].cardID;
            playerOneHand.appendChild(div);
            deck.shift(); //! ilk elemani siler
        }
        for (let i = 7; i < 14; i++) {
            player2.playerCards.push(deck[i]);
            player2CardID++;
            let div = document.createElement('div');
            div.classList.add('card');
            // div.style.backgroundImage = "url('assets/images/png/uno-card-back.png')";
            div.style.backgroundColor = deck[i].color;
            div.classList.add('display');
            div.innerText = deck[i].number;
            div.id = "player2CardDiv"; //deck[i].cardID;
            playerTwoHand.appendChild(div);
            deck.shift();
        }
        for (let i = 14; i < 21; i++) {
            player3.playerCards.push(deck[i]);
            player3CardID++;
            let div = document.createElement('div');
            div.classList.add('card');
            div.style.backgroundColor = deck[i].color;
            div.classList.add('display');
            div.innerText = deck[i].number;
            div.id = "player3CardDiv";
            playerThreeHand.appendChild(div);
            deck.shift();
        }
        for (let i = 21; i < 28; i++) {
            player4.playerCards.push(deck[i]);
            player4CardID++;
            let div = document.createElement('div');
            div.classList.add('card');
            div.style.backgroundColor = deck[i].color;
            div.innerText = deck[i].number;
            div.id = "player4CardDiv";
            div.classList.add('display');
            playerFourHand.appendChild(div);
            deck.shift();
        }

        // console.log(player1);
        // console.table(player2);
        // console.table(player3);
        // console.table(player4);

        //? 7 kart oyunculara dagitildi

        for (let i = 28; i < 29; i++) {
            openCard = deck[i];
            midCardBack.classList.add('none');
            midCardFront.classList.add('display');
            midCardFront.style.backgroundColor = deck[i].color;
            midCardFront.innerText = deck[i].number;
            midCardFront.style.zIndex = '1';
            // console.log(openCard);
            deck.shift();
        }
        //? 1 kart acik olarak ortaya konuldu
    } else {
        alert('Oyun zaten baslamış');
    }
    //* Kartlarin karistirilmasi
    console.table(deck); game();
}


//TODO: Hangi oyuncuda oldugu kontorolu yapilacak
//TODO: Oyuncunun karti varsa oynayabilecek

function game() {

    if (player1CardID !== 0 || player2CardID !== 0 || player3CardID !== 0 || player4CardID !== 0) {
        if (player1.isActive) {
            playerOneHand.addEventListener('click', function (e) {
                let card = e.target;
                let cardColor = card.style.backgroundColor;
                let cardNumber = card.innerText;
                let thisCardID = parseInt(card.id);
                if (e.target.classList.contains('card') && player1.isActive) {
                    if (
                        cardColor == openCard.color ||
                        cardNumber == openCard.number
                    ) {
                        openCard = {
                            openCard: thisCardID,
                            color: cardColor,
                            number: cardNumber,
                        };
                        midCardFront.style.backgroundColor = cardColor;
                        midCardFront.innerText = cardNumber;
                        let i = 0;
                        for (playerCardID of player1.playerCards) {
                            if (thisCardID == playerCardID.cardID && cardColor == playerCardID.color && cardNumber == playerCardID.number) {
                                player1.playerCards.splice(i, 1);
                                card.remove();
                                player1CardID--;
                                player1.isActive = false;
                                player2.isActive = true;
                                setTimeout(function () {
                                    game();
                                }, 2000);
                                return;
                            }
                            i++;
                        }

                    } else {
                        console.log('Bu kartı oynayamazsınız');
                    }
                }
            });
            playerDrawOne.addEventListener('click', function () {
                for (let j = 0; j < 1; j++) {
                    console.log(j)
                    player1.playerCards.push(deck[j]);
                    player1CardID++;
                    let div = document.createElement('div');
                    div.classList.add('card');
                    // div.style.backgroundImage = "url('assets/images/png/uno-card-back.png')";
                    div.style.backgroundColor = deck[j].color;
                    div.classList.add('display');
                    div.innerText = deck[j].number;
                    div.id = player1CardID;
                    playerOneHand.appendChild(div);
                    deck.shift();
                    // debugger;
                    return;
                }
            });
        }
        else if (player2.isActive) {
            console.log('player 2');
            let cardControl = true;
            let i = 0;

            if (cardControl) {
                for (player2Cards of player2.playerCards) {

                    // console.log(openCard);
                    // console.log(player2Cards);
                    if (openCard.color == player2Cards.color || openCard.number == player2Cards.number) {


                        openCard = {
                            openCard: player2Cards.cardID,
                            color: player2Cards.color,
                            number: player2Cards.number,
                        };

                        midCardFront.style.backgroundColor = player2Cards.color;
                        midCardFront.innerText = player2Cards.number;

                        player2.playerCards.splice(i, 1);


                        player2CardID--;
                        player2.isActive = false;
                        player3.isActive = true;



                        let cardElement = document.querySelectorAll("#player2CardDiv");
                        // if (cardElement) {
                        //     cardElement.remove();
                        // }
                        let elementCard = cardElement[i];
                        elementCard.remove();
                        setTimeout(function () {
                            game();
                        }, 2000);
                        return;
                    }
                    i++
                }
                console.log("card kontrol false");
                cardControl = false;
            }
            else if (cardControl == false) {
                console.log("player 2 else");
                for (let j = 0; j < 1; j++) {
                    player2.playerCards.push(deck[j]);
                    player2CardID++;
                    let div = document.createElement('div');
                    div.classList.add('card');
                    // div.style.backgroundImage = "url('assets/images/png/uno-card-back.png')";
                    div.style.backgroundColor = deck[j].color;
                    div.classList.add('display');
                    div.innerText = deck[j].number;
                    div.id = player2CardID;
                    playerTwoHand.appendChild(div);
                    deck.shift();
                    cardControl = true;
                    debugger;
                }

            }


        }
        else if (player3.isActive) {
            console.log('player 3');
            let cardControl = true;
            let i = 0;

            if (cardControl) {
                for (player3Cards of player3.playerCards) {

                    // console.log(openCard);
                    // console.log(player3Cards);
                    if (openCard.color == player3Cards.color || openCard.number == player3Cards.number) {


                        openCard = {
                            openCard: player3Cards.cardID,
                            color: player3Cards.color,
                            number: player3Cards.number,
                        };

                        midCardFront.style.backgroundColor = player3Cards.color;
                        midCardFront.innerText = player3Cards.number;

                        player3.playerCards.splice(i, 1);


                        player3CardID--;
                        player3.isActive = false;
                        player4.isActive = true;





                        let cardElement = document.querySelectorAll("#player3CardDiv");
                        // if (cardElement) {
                        //     cardElement.remove();
                        // }
                        let elementCard = cardElement[i];
                        elementCard.remove();
                        setTimeout(function () {
                            game();
                        }, 2000);
                        return;
                    }
                    i++
                } console.log("card kontrol false");
                cardControl = false;
            }
            else if (cardControl == false) {
                console.log("player 3 else");
                for (let j = 0; j < 1; j++) {
                    player3.playerCards.push(deck[j]);
                    player3CardID++;
                    let div = document.createElement('div');
                    div.classList.add('card');
                    // div.style.backgroundImage = "url('assets/images/png/uno-card-back.png')";
                    div.style.backgroundColor = deck[j].color;
                    div.classList.add('display');
                    div.innerText = deck[j].number;
                    div.id = player3CardID;
                    playerThreeHand.appendChild(div);
                    deck.shift();
                    cardControl = true;
                    debugger;
                }

            }
            console.table(deck);
        }
        else if (player4.isActive) {
            console.log('player 4');
            let cardControl = true;
            let i = 0;

            if (cardControl) {
                for (player4Cards of player4.playerCards) {

                    // console.log(openCard);
                    // console.log(player4Cards);
                    if (openCard.color == player4Cards.color || openCard.number == player4Cards.number) {


                        openCard = {
                            openCard: player4Cards.cardID,
                            color: player4Cards.color,
                            number: player4Cards.number,
                        };

                        midCardFront.style.backgroundColor = player4Cards.color;
                        midCardFront.innerText = player4Cards.number;

                        player4.playerCards.splice(i, 1);


                        player4CardID--;
                        player4.isActive = false;
                        player1.isActive = true;



                        let cardElement = document.querySelectorAll("#player4CardDiv");
                        // if (cardElement) {
                        //     cardElement.remove();
                        // }
                        let elementCard = cardElement[i];
                        elementCard.remove();
                        setTimeout(function () {
                            game();
                        }, 2000);
                        return;
                    }
                    i++
                } console.log("card kontrol false");
                cardControl = false;

            }
            else if (cardControl == false) {
                console.log("player 4 else");
                for (let j = 0; j < 1; j++) {
                    player4.playerCards.push(deck[j]);
                    player4CardID++;
                    let div = document.createElement('div');
                    div.classList.add('card');
                    // div.style.backgroundImage = "url('assets/images/png/uno-card-back.png')";
                    div.style.backgroundColor = deck[j].color;
                    div.classList.add('display');
                    div.innerText = deck[j].number;
                    div.id = player4CardID;
                    playerFourHand.appendChild(div);
                    deck.shift();
                    cardControl = true;
                    debugger;
                }

            }
            console.table(deck);
        }
    }
    else {
        alert("oyun bitti");
    }

}

