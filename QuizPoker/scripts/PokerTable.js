class Player {
    name;
    chipCount;
    betting;
    bet;
    cards;
    constructor(name, chipCount, betting, bet, cards) {
        this.name = name;
        this.chipCount = chipCount;
        this.betting = betting;
        this.bet = bet;
        this.cards = cards;
    }
}

class Question {
    text;
    type;
    tips;
    challenge;
    constructor(text, type, tips, challenge) {
        this.text = text;
        this.type = type;
        this.tips = tips;
        this.challenge = challenge;
    }
}

class Tips {
    tipsArray;
    showTipArray;
    constructor(tipsArray) {
        this.tipsArray = tipsArray;
        this.showTipArray = [false, false, false];
    }
}

class GameState {
    players;
    currentPlayer;
    question;
    gameID;
    smallBlind;
    bigBlind;
    constructor(gameID, players, currentPlayer, question, smallBlind, bigBlind) {
        this.gameID = gameID;
        this.players = players;
        this.currentPlayer = currentPlayer;
        this.question = question;
        this.smallBlind = smallBlind;
        this.bigBlind = bigBlind;
    }
}

class ModEvent {
    type;
    data;
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
    tostring() {
        return JSON.stringify(this);
    }
}

class QuizEvent {
    id;
    eventType;
    gameState;
    player;
    constructor(id, eventType, gameState, player) {
        this.id = id;
        this.eventType = eventType;
        this.gameState = gameState;
        this.player = player;
    }
}



var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const gameID = params.get('gameID');
const playerName = params.get('name');

var firstConnect = true;
var currentGameState = new GameState(undefined, undefined, undefined, undefined, undefined, undefined);
var socket;

function connectWebSocket() {
    socket = new WebSocket(`wss://modserver-dedo.glitch.me?id=${gameID}`);
    // socket = new WebSocket(`ws://localhost:8080?id=${gameID}`);

    socket.onopen = function () {
        console.log('WebSocket-Verbindung hergestellt.');
        if (firstConnect) {
            firstConnect = false;

            var quizEvent = new QuizEvent(gameID, "join", undefined, new Player(playerName, 20000, false, 0, 0));
            var modEvent = new ModEvent("quiz", quizEvent);
            socket.send(JSON.stringify(modEvent));
        }

    };

    socket.onclose = function () {
        console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
        setTimeout(connectWebSocket, 500); // Verbindung nach 0.5 Sekunden erneut aufbauen
    };

    socket.onerror = function (error) {
        console.error('WebSocket-Fehler aufgetreten: ', error);
    };

    socket.onmessage = function (event) {
        const message = event.data;

        const modEvent = JSON.parse(message);
        const quizEvent = modEvent.data;

        switch (quizEvent.eventType) {
            case "newGameState":
                console.log(quizEvent);
                currentGameState = quizEvent.gameState;
                loadGameState();
                break;
            case "question":
                console.log(quizEvent);
                currentGameState = quizEvent.gameState;
                loadGameState();
                showCardsInput();
                break;

            case "timer":
                setTimeout(sendCards, quizEvent.player.bet);
                break;

            case "winner":
                window.location.href = `../html/PokerWinner.html?gameID=${gameID}&controller=0&name=${playerName}&winner=${quizEvent.player.name}`;
                break;

            default:
                console.log("OTHER");
                console.log(quizEvent);
                break;
        }
    };
}


async function sendCards() {
    const cardsInput = document.getElementById("cardsInput");
    const cards = cardsInput.value;
    showCards(cards);

    const ownPlayer = getMyPlayer(currentGameState.players);
    ownPlayer.cards = cards;

    var quizEvent = new QuizEvent(gameID, "cards", undefined, ownPlayer);
    var modEvent = new ModEvent("quiz", quizEvent);
    socket.send(JSON.stringify(modEvent));
}

function getMyPlayer(players) {
    for (let index = 0; index < players.length; index++) {
        const element = players[index];
        if (element.name === playerName) {
            return element;
        }
    }
}

function createPlayerInfoBox(name, amZug, points, betting, bet, playernumber) {
    // Erstelle das äußere Container-Element
    const playerInfoBox = document.createElement("div");
    playerInfoBox.className = "playerInfo";

    // Erstelle die inneren Label-Elemente
    const labels = [
        { label: name },
        { label: "Points: " + points },
        { label: "Bet: " + bet }
    ];

    labels.forEach(labelData => {
        const playerLabel = document.createElement("div");
        playerLabel.className = "playerLabel";

        const p = document.createElement("p");
        p.className = "otherInfo";
        p.textContent = labelData.label;

        playerLabel.appendChild(p);
        playerInfoBox.appendChild(playerLabel);
    });

    // Finde das Zielt-Element (playerBox mit der ID "player" + playernumber)
    const targetElement = document.getElementById("player" + playernumber);

    if (amZug) {
        targetElement.style.borderColor = "green";
    } else {
        targetElement.style.borderColor = "#68170B";
    }

    if (!betting) {
        targetElement.style.borderColor = "grey";
    }

    targetElement.classList.add("playerBox");

    // Füge die erstellte Box zum Zielt-Element hinzu
    targetElement.appendChild(playerInfoBox);
}

function loadOwnPlayer(amZug, points, betting, bet) {
    const bottomRow = document.getElementsByClassName("bottomRow")[0];

    if (amZug) {
        bottomRow.style.borderColor = "green";
    } else {
        bottomRow.style.borderColor = "#68170B";
    }

    if (!betting) {
        bottomRow.style.borderColor = "grey";
    }

    const mypoints = document.getElementById("mypoints");
    const mybet = document.getElementById("mybet");

    mypoints.textContent = "Points: " + points;
    mybet.textContent = "Bet: " + bet;

    const callButton = document.getElementById("call");
    const highestBettingPlayer = getHighestBetPlayer(currentGameState.players);

    if (bet === highestBettingPlayer.bet) { //call to check if bet = highest bet 
        callButton.textContent = "Check";
    } else {
        const callBet = highestBettingPlayer.bet - bet;
        callButton.textContent = "Call: " + callBet;
    }
}

function loadGameState() {
    const players = currentGameState.players;
    const otherPlayers = players.filter(player => player.name !== playerName);

    const playerDivs = document.getElementsByClassName("placeholder");

    for (let i = 0; i < playerDivs.length; i++) {
        const element = playerDivs[i];
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    otherPlayers.forEach((player, index) => {
        var amZug = false;
        if (currentGameState.currentPlayer === player.name) {
            amZug = true;
        }
        createPlayerInfoBox(player.name, amZug, player.chipCount, player.betting, player.bet, index + 1);
    });

    const ownPlayer = players.filter(player => player.name === playerName);

    var amZug = false;
    if (currentGameState.currentPlayer === ownPlayer[0].name) {
        amZug = true;
    }
    loadOwnPlayer(amZug, ownPlayer[0].chipCount, ownPlayer[0].betting, ownPlayer[0].bet);

    loadPot(players);

    if (challengeNow()) {
        loadChallengePlayer(players);
    } else {
        const challengeText = document.getElementById("challengeInfo");
        challengeText.innerHTML = "";
    }
    // if (questionTime()) {
    //     clearQuestion();
    //     loadQuestion();
    // } else { //challengeTime
    //     clearChallenge();
    //     loadChallenge();
    // }
    clearQuestion();
    loadQuestion();
}

function loadPot(players) {
    var pot = 0;
    for (let index = 0; index < players.length; index++) {
        const element = players[index];
        pot += element.bet;
    }
    const potText = document.getElementById("potInfo");
    potText.textContent = "Pot: " + pot;
}

function loadChallengePlayer(players) {

    const bettingPlayers = players.filter(player => player.betting === true);

    let maxBetPlayer = bettingPlayers[0];

    for (let i = 1; i < bettingPlayers.length; i++) {
        const currentPlayer = bettingPlayers[i];

        if (currentPlayer.bet > maxBetPlayer.bet ||
            (currentPlayer.bet === maxBetPlayer.bet && currentPlayer.chipCount < maxBetPlayer.chipCount)) {
            maxBetPlayer = currentPlayer;
        }
    }

    const challengeText = document.getElementById("challengeInfo");
    challengeText.innerHTML = maxBetPlayer.name + "<br>" + maxBetPlayer.cards;
}

function showCards(cards) {
    const cardsP = document.createElement('p');
    cardsP.setAttribute('id', 'cardsText');
    cardsP.textContent = cards;

    const cardsInputDiv = document.getElementById("cardsInputDiv");
    const inputElement = document.getElementById("cardsInput");

    if (inputElement && inputElement.parentNode === cardsInputDiv) {
        cardsInputDiv.removeChild(inputElement);
    }

    cardsInputDiv.appendChild(cardsP);
}

function showCardsInput() {
    const cardsInput = document.createElement('input');
    cardsInput.setAttribute('type', 'number');
    cardsInput.setAttribute('id', 'cardsInput');
    cardsInput.setAttribute('value', '0');

    const cardsInputDiv = document.getElementById("cardsInputDiv");
    const inputElement = document.getElementById("cardsText");

    if (inputElement && inputElement.parentNode === cardsInputDiv) {
        cardsInputDiv.removeChild(inputElement);
    }

    cardsInputDiv.appendChild(cardsInput);
}

function clearQuestion() {
    const tips = document.getElementsByClassName("tip");
    for (let i = 0; i < tips.length; i++) {
        tips[i].textContent = "";
    }
}

function loadQuestion() {
    const question = currentGameState.question;
    const qLabel = document.getElementById("questionLabel");
    qLabel.textContent = question.text;

    //load Question tips
    const tips = document.getElementsByClassName("tip");
    for (let i = 0; i < question.tips.tipsArray.length; i++) {
        if (question.tips.showTipArray[i]) {
            tips[i].textContent = question.tips.tipsArray[i];
        }
    }
}

function getHighestBetPlayer(players) {
    const bettingPlayers = players.filter(player => player.betting === true);

    //for starting round nobody bets
    if (bettingPlayers.length === 0) {
        return new Player(undefined, undefined, undefined, 0, undefined);
    }

    let maxBetPlayer = bettingPlayers[0];

    for (let i = 1; i < bettingPlayers.length; i++) {
        const currentPlayer = bettingPlayers[i];

        if (currentPlayer.bet > maxBetPlayer.bet) {
            maxBetPlayer = currentPlayer;
        }
    }

    return maxBetPlayer;
}

function getPlayerByID(id) {
    for (let i = 0; i < currentGameState.players.length; i++) {
        if (currentGameState.players[i].name === id) {
            return currentGameState.players[i];
        }
    }
}

function throwCards() {
    const ownPlayer = getPlayerByID(currentGameState.currentPlayer);
    if (ownPlayer.name === playerName && ownPlayer.betting && !challengeNow()) {
        var quizEvent = new QuizEvent(gameID, "playerAction", undefined,
            new Player(playerName, ownPlayer.chipCount, false, ownPlayer.bet, ownPlayer.cards));

        var modEvent = new ModEvent("quiz", quizEvent);
        socket.send(JSON.stringify(modEvent));
    }
}

function callBet() {
    const ownPlayer = getPlayerByID(currentGameState.currentPlayer);
    if (ownPlayer.name === playerName && ownPlayer.betting && !challengeNow()) {
        const newBet = getHighestBetPlayer(currentGameState.players).bet;
        const newPoints = ownPlayer.chipCount - (newBet - ownPlayer.bet);
        var quizEvent = new QuizEvent(gameID, "playerAction", undefined,
            new Player(playerName, newPoints, true, newBet, ownPlayer.cards));

        var modEvent = new ModEvent("quiz", quizEvent);
        socket.send(JSON.stringify(modEvent));
    }
}

function raiseBet() {
    const ownPlayer = getPlayerByID(currentGameState.currentPlayer);
    const raiseAmount = document.getElementById("raiseAmount").value;
    const regex = /^[+]?\d+([.]\d+)?$/;

    const highestBet = getHighestBetPlayer(currentGameState.players).bet;
    if (ownPlayer.name === playerName
        && regex.test(raiseAmount)
        && parseInt(raiseAmount, 10) + ownPlayer.bet < ownPlayer.chipCount + 1
        && parseInt(raiseAmount, 10) + ownPlayer.bet > highestBet
        && ownPlayer.betting
        && !challengeNow()) {

        const newBet = ownPlayer.bet + parseInt(raiseAmount, 10);
        const newPoints = ownPlayer.chipCount - parseInt(raiseAmount, 10);

        var quizEvent = new QuizEvent(gameID, "playerAction", undefined,
            new Player(playerName, newPoints, true, newBet, ownPlayer.cards));

        var modEvent = new ModEvent("quiz", quizEvent);
        socket.send(JSON.stringify(modEvent));
    }
}

function challengeNow() {
    let numBetting = currentGameState.players.filter(player => player.betting).length;
    return numBetting == 1;
}


connectWebSocket();
// createPlayerInfoBox("name2", false, 1000, true, 50, 2)
// createPlayerInfoBox("name3", false, 1000, true, 50, 3)
// createPlayerInfoBox("name4", false, 1000, false, 0, 4)
// createPlayerInfoBox("name5", true, 1000, true, 50, 5)
// createPlayerInfoBox("name6", false, 1000, false, 50, 6)
// createPlayerInfoBox("name7", false, 1000, false, 0, 7)