class Account {
    summonerId;
    name;
    hashtag;
    accountId;
    puuid;
    tier;
    rank;
    leaguePoints;
    combinedLP;
    wins;
    loses;
    hotstreak;
    lastThree;

    constructor(
        summonerId,
        name,
        hashtag,
    ) {
        this.summonerId = summonerId;
        this.name = name;
        this.hashtag = hashtag;
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

var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const summonerName = params.get('name');
const tag = params.get('tag');
const key = params.get('key');

var socket;
const endTime = 1706137199000;
var timerInterval;
var pingInterval;
var better = "";
var connectAgain = true;
var savedAccount = new Account("", summonerName , tag);

function connectWebSocket() {
    socket = new WebSocket(`wss://modserver-dedo.glitch.me`);
    // socket = new WebSocket(`ws://localhost:8080`);

    pingInterval = setInterval(ping, 60000);

    socket.onopen = function () {
        console.log('WebSocket-Verbindung hergestellt.');
        const modEvent = new ModEvent("league/listenAccount", {summonerName: summonerName, tag: tag, key: key});
        socket.send(JSON.stringify(modEvent));
    };

    socket.onclose = function () {
        console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
        clearInterval(pingInterval);
        connectWebSocket(); // Verbindung nach 2 Sekunden erneut aufbauen
    };

    socket.onerror = function (error) {
        console.error('WebSocket-Fehler aufgetreten: ', error);
    };

    socket.onmessage = function (event) {
        const message = event.data;
        
        if (message === "pong") {
            return;
        }
        
        const data = JSON.parse(message);
        const account = data.accounts[0];
        console.log(account);
        savedAccount = account;

        document.getElementById("Player").innerHTML = '';

        generatePlayer(account.name, account.tier, account.rank, account.leaguePoints, account.lastThree);

    };
}

function ping() {
    socket.send("ping");
}

// Initialer Verbindungsaufbau
connectWebSocket();

const rPath = "../ressources/";

function generatePlayer(playerName, eloSymbolSrc, rank, lpValue, matches) {
    var playerDiv = document.createElement('div');

    var eloDiv = document.createElement('div');
    eloDiv.className = 'ELO';

    var eloImg = document.createElement('img');
    eloImg.src = rPath + eloSymbolSrc + ".png";
    eloImg.alt = '';
    eloImg.classList.add("eloimg");

    var lpP = document.createElement('p');
    if (eloSymbolSrc !== "EMERALD" && eloSymbolSrc !== "DIAMOND") {
        lpP.textContent = lpValue + ' LP';
    } else {
        lpP.textContent = rank + " " + lpValue + ' LP';
    }

    eloDiv.appendChild(eloImg);
    eloDiv.appendChild(lpP);

    playerDiv.appendChild(eloDiv);

    //create foreach match icon and arrow down red or green up `https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${championName}.png`
    var matchesDiv = document.createElement('div');
    matches.reverse();
    matches.forEach((match, index) => {
        var champIMG = document.createElement('img');
        champIMG.id = index + "img"
        champIMG.src = `https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/${match.championName}.png`;
        champIMG.alt = '';
        champIMG.classList.add("profileImg");
        matchesDiv.appendChild(champIMG);
    });
    
    playerDiv.appendChild(matchesDiv);
    
    var parentplayerDiv = document.getElementById("Player");
    parentplayerDiv.appendChild(playerDiv);
    
    matches.forEach((match, index) => {
        addArrow(index, match.win);
    });
}

function addArrow(name, direction) {
    var existingImg = document.getElementById(name + "img");
    var overlayImg = document.createElement('img');
    overlayImg.src = rPath + direction + ".png";
    overlayImg.alt = 'Overlay Image';
    overlayImg.style.position = 'absolute';
    overlayImg.style.bottom = '0';
    overlayImg.style.left = '0';
    overlayImg.style.width = "100px"
    overlayImg.style.height = "100px"
    existingImg.appendChild(overlayImg);
}

// Beispielaufruf der Funktion mit Dummy-Werten
// generatePlayer('SOLA', 'CHALLENGER', 'I', 95, 'V9');
