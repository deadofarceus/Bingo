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

function createPlayerElement(name, amZug, points, betting, bet, cards) {
    // Erstellen eines neuen Div-Elements mit der Klasse "column"
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('column');

    // Erstellen eines Labels für den Namen
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', name);
    nameLabel.textContent = name;

    // Erstellen eines Input-Felds für den Namen
    const pointsInput = document.createElement('input');
    pointsInput.setAttribute('type', 'number');
    pointsInput.setAttribute('id', name);
    pointsInput.value = points;

    // Erstellen eines Labels für "am Zug"
    const zugLabel = document.createElement('label');
    zugLabel.setAttribute('for', `zug${name}`);
    zugLabel.textContent = 'am Zug';

    // Erstellen eines Checkbox-Elements
    const zugCheckbox = document.createElement('input');
    zugCheckbox.setAttribute('type', 'checkbox');
    zugCheckbox.setAttribute('id', `zug${name}`);
    zugCheckbox.checked = amZug; // Setzen der Checkbox auf checked, wenn isChecked true ist

    // Erstellen eines Labels für "betting"
    const bettingLabel = document.createElement('label');
    bettingLabel.setAttribute('for', `betting${name}`);
    bettingLabel.textContent = 'Betting';

    // Erstellen eines Checkbox-Elements
    const bettingCheckbox = document.createElement('input');
    bettingCheckbox.setAttribute('type', 'checkbox');
    bettingCheckbox.setAttribute('id', `betting${name}`);
    bettingCheckbox.checked = betting; // Setzen der Checkbox auf checked, wenn isChecked true ist

    // Erstellen eines Labels für "Bet"
    const betLabel = document.createElement('label');
    betLabel.setAttribute('for', `bet${name}`);
    betLabel.textContent = 'Bet';

    // Erstellen eines Input-Felds für den Namen
    const betInput = document.createElement('input');
    betInput.setAttribute('type', 'number');
    betInput.value = bet;

    // Hinzufügen der erstellten Elemente zum playerDiv
    playerDiv.appendChild(nameLabel);
    playerDiv.appendChild(pointsInput);
    playerDiv.appendChild(zugLabel);
    playerDiv.appendChild(zugCheckbox);
    playerDiv.appendChild(bettingLabel);
    playerDiv.appendChild(bettingCheckbox);
    playerDiv.appendChild(betLabel);
    playerDiv.appendChild(betInput);

    if (cards > -1) {
        playerDiv.style.border = "3px solid green;";
    } else {
        playerDiv.style.border = "3px solid var(--dark-red);";
    }


    // Hinzufügen des playerDiv zum Ziel-Div mit der ID "PlayerRow"
    const playerRow = document.getElementById('PlayerRow');
    playerRow.appendChild(playerDiv);
}


var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const gameID = params.get('gameID');

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

            var newGameState = new GameState(gameID, [], undefined, undefined, undefined, undefined);
            var quizEvent = new QuizEvent(gameID, "create", newGameState, undefined);
            var modEvent = new ModEvent("quiz", quizEvent);
            socket.send(JSON.stringify(modEvent));

            quizEvent = new QuizEvent(gameID, "controller", undefined, undefined);
            modEvent = new ModEvent("quiz", quizEvent);
            socket.send(JSON.stringify(modEvent));
        }

    };

    socket.onclose = function () {
        console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
        setTimeout(connectWebSocket, 2000); // Verbindung nach 2 Sekunden erneut aufbauen
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

            case "timer":
                // setTimeout(sendCards, quizEvent.player.bet); TODO
                break;

            case "winner":
                window.location.href = `../html/PokerWinner.html?gameID=${gameID}&controller=1&winner=${quizEvent.player.name}`;
                break;

            default:
                console.log("OTHER");
                console.log(quizEvent);
                break;
        }
    };
}

function quitGame() {
    const quizEvent = new QuizEvent(gameID, "quit", undefined, undefined);
    const modEvent = new ModEvent("quiz", quizEvent);
    socket.send(JSON.stringify(modEvent));
}

function sendChanges() {
    const playerRow = document.getElementById('PlayerRow');
    const playerDivs = playerRow.getElementsByClassName('column');

    var playersTurn;

    const players = [];

    for (let i = 0; i < playerDivs.length; i++) {
        const playerDiv = playerDivs[i];

        const labelElements = playerDiv.querySelectorAll('label');
        const inputElements = playerDiv.querySelectorAll('input');

        const labelArray = Array.from(labelElements);

        const nameLabel = labelArray[0];
        const name = nameLabel.textContent;

        const pointsInput = inputElements[0];
        const points = pointsInput.value;

        const zugCheckbox = inputElements[1];
        const amZug = zugCheckbox.checked;



        const bettingCheckbox = inputElements[2];
        const betting = bettingCheckbox.checked;

        const betInput = inputElements[3];
        const bet = betInput.value;

        const player = new Player(name, points, betting, bet);

        if (amZug) {
            playersTurn = player; //TODO wer am zug
        }
        players.push(player);
    }

    const newGameState = new GameState(gameID, players, playersTurn, currentGameState.question, currentGameState.smallBlind, currentGameState.bigBlind);
    const quizEvent = new QuizEvent(gameID, "newGameState", newGameState, undefined);
    const modEvent = new ModEvent("quiz", quizEvent);
    socket.send(JSON.stringify(modEvent));
}

function startTimer(duration) { //in milliseconds
    const quizEvent = new QuizEvent(gameID, "timer", undefined, new Player(undefined, undefined, undefined, duration, undefined));
    const modEvent = new ModEvent("quiz", quizEvent);
    socket.send(JSON.stringify(modEvent));
}

function nextQuestion() {
    const quizEvent = new QuizEvent(gameID, "question", undefined, undefined);
    const modEvent = new ModEvent("quiz", quizEvent);
    socket.send(JSON.stringify(modEvent));
}

function sendWin() {
    const player = getPlayerWithMaxBet(currentGameState.players);//TODO FEHLER DA MUSS CHALLENGE BET HIN DAS FEHLT WEEWOO
    const quizEvent = new QuizEvent(gameID, "win", undefined, player);
    const modEvent = new ModEvent("quiz", quizEvent);
    socket.send(JSON.stringify(modEvent));
}

function sendLose() {
    const player = getPlayerWithMaxBet(currentGameState.players); //TODO FEHLER DA MUSS CHALLENGE BET HIN DAS FEHLT WEEWOO
    const quizEvent = new QuizEvent(gameID, "lose", undefined, player);
    const modEvent = new ModEvent("quiz", quizEvent);
    socket.send(JSON.stringify(modEvent));
}

function loadGameState() {
    //Load Players
    const playerRow = document.getElementById('PlayerRow');
    const playerDivs = playerRow.getElementsByClassName('column');

    for (let i = playerDivs.length - 1; i >= 0; i--) {
        playerRow.removeChild(playerDivs[i]);
    }

    const players = currentGameState.players;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        var amZug = false;
        if (currentGameState.currentPlayer === player.name) {
            amZug = true;
        }
        createPlayerElement(player.name, amZug, player.chipCount, player.betting, player.bet, player.cards);
    }

    //load Question
    clearQuestion();
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

    //load Challenge
    clearChallenge();
    if (checkAllPlayersSameBet(players)) {
        //show Challenges or whatever TODO
        const playerWhoHasToDoChallenge = getPlayerWithMaxBet(players);
        console.log(playerWhoHasToDoChallenge);
    }
}

function clearQuestion() {
    const tips = document.getElementsByClassName("tip");
    for (let i = 0; i < tips.length; i++) {
        tips[i].textContent = "";
    }
}

function clearChallenge() {
    const challenge = document.getElementById("challengeText");
    challenge.textContent = "";
}

function checkAllPlayersSameBet(players) {
    const bettingPlayers = players.filter(player => player.betting === true);

    let maxBetPlayer = bettingPlayers[0];

    for (let i = 1; i < bettingPlayers.length; i++) {
        const currentPlayer = bettingPlayers[i];

        if (currentPlayer.bet !== maxBetPlayer.bet) {
            return false;
        }
    }

    // Wenn alle Spieler denselben bet-Wert haben und betting auf true gesetzt haben, geben Sie true zurück
    return true;
}

function getPlayerWithMaxBet(players) {
    const bettingPlayers = players.filter(player => player.betting === true);

    let maxBetPlayer = bettingPlayers[0];

    for (let i = 1; i < bettingPlayers.length; i++) {
        const currentPlayer = bettingPlayers[i];

        if (currentPlayer.bet > maxBetPlayer.bet ||
            (currentPlayer.bet === maxBetPlayer.bet && currentPlayer.chipCount < maxBetPlayer.chipCount)) {
            maxBetPlayer = currentPlayer;
        }
    }

    return maxBetPlayer;
}

function startRound() {
    if (isFirstRound()) {
        currentGameState.players.forEach(player => {
            if (player.chipCount > 0) {
                player.betting = true;
            } else {
                player.betting = false;
            }
        });

        const quizEvent = new QuizEvent(gameID, "newGameState", currentGameState, undefined);
        const modEvent = new ModEvent("quiz", quizEvent);
        socket.send(JSON.stringify(modEvent));
    }
}

function isFirstRound() {
    for (let i = 0; i < currentGameState.players.length; i++) {
        if (currentGameState.players[i].bet !== 0) {
            return false;
        }
    }
    return !currentGameState.question.tips.showTipArray[0];
}

connectWebSocket();
// createPlayerElement("soos", true, 1000, true, 50);
