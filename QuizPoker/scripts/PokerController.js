class Player {
    name;
    chipCount;
    betting;
    bet;
    constructor(name, chipCount, betting, bet) {
        this.name = name;
        this.chipCount = chipCount;
        this.betting = betting;
        this.bet = bet;
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

function createPlayerElement(name, isChecked, points) {
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
    zugCheckbox.checked = isChecked; // Setzen der Checkbox auf checked, wenn isChecked true ist

    // Hinzufügen der erstellten Elemente zum playerDiv
    playerDiv.appendChild(nameLabel);
    playerDiv.appendChild(pointsInput);
    playerDiv.appendChild(zugLabel);
    playerDiv.appendChild(zugCheckbox);

    // Hinzufügen des playerDiv zum Ziel-Div mit der ID "PlayerRow"
    const playerRow = document.getElementById('PlayerRow');
    playerRow.appendChild(playerDiv);
}

createPlayerElement("soos", true, 1000);

var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const gameID = params.get('gameID');

var firstConnect = true;
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
        console.log(message);

        const modEvent = JSON.parse(message);

        // loadGameState();
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

    const players = [];

    for (let i = 0; i < playerDivs.length; i++) {
        const playerDiv = playerDivs[i];

        const labelElements = playerDiv.querySelectorAll('label');
        const inputElements = playerDiv.querySelectorALl('input');

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
        players.push(player);
        console.log(`Name ${name}: Am Zug - ${amZug}: Points - ${points}`);
    }
}

function startTimer(duration) { //in milliseconds TODO backend Fehlt
    
}

function nextQuestion() {
    
}

function sendWin() {
    
}

function sendLose() {
    
}

function loadGameState() {
    
}

connectWebSocket();