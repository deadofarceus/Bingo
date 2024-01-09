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

var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');

var socket;

function connectWebSocket() {
    socket = new WebSocket(`wss://modserver-dedo.glitch.me?id=${id}`);
    // socket = new WebSocket(`ws://localhost:8080?id=${id}&type=${type}&channel=${channel}`);
    
    setInterval(ping, 60000);

    socket.onopen = function () {
        console.log('WebSocket-Verbindung hergestellt.');
        if (id === "LPRace2024GET") {
            socket.send("getLeagueData");
        }
    };

    socket.onclose = function () {
        console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
        if (id === "LPRace2024") {
            connectWebSocket(); // Verbindung nach 2 Sekunden erneut aufbauen
        }
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
        const accounts = data.accounts;

        document.getElementById("V9Player").innerHTML = '';
        document.getElementById("NNOPlayer").innerHTML = '';

        var V9ELo = 0;
        var NNOELo = 0;

        accounts.forEach(player => {
            if (player.name === "Sola" || player.name === "Kutcher") {
                V9ELo += player.combinedLP
                generatePlayer(player.name, player.tier, player.rank, player.leaguePoints, "V9");
            } else {
                NNOELo += player.combinedLP
                generatePlayer(player.name, player.tier, player.rank, player.leaguePoints, "NNO");
            }
        });

        setELO("V9", V9ELo);
        setELO("NNO", NNOELo);
    };
}

function ping() {
    socket.send("ping");
}

// Initialer Verbindungsaufbau
connectWebSocket();

function setELO(team, LP) {
    var eloP = document.getElementById(team + "ELO");
    eloP.innerHTML = team + " " + LP + " LP";
}

const rPath = "../ressources/";

function generatePlayer(playerName, eloSymbolSrc, rank, lpValue, team) {
    var playerDiv = document.createElement('div');

    var img1 = document.createElement('img');
    img1.src = rPath + playerName + ".png";
    img1.alt = '';

    var pText = document.createElement('p');
    pText.textContent = playerName;

    var eloDiv = document.createElement('div');
    eloDiv.className = 'ELO';

    var eloImg = document.createElement('img');
    eloImg.src = rPath + eloSymbolSrc + ".png";
    eloImg.alt = '';

    var lpP = document.createElement('p');
    lpP.textContent = rank + " " + lpValue + ' LP';

    eloDiv.appendChild(eloImg);
    eloDiv.appendChild(lpP);

    playerDiv.appendChild(img1);
    playerDiv.appendChild(pText);
    playerDiv.appendChild(eloDiv);

    var parentplayerDiv = document.getElementById(team + "Player");
    parentplayerDiv.appendChild(playerDiv);
}

// Beispielaufruf der Funktion mit Dummy-Werten
// generatePlayer('SOLA', 'MASTER', 95, 'V9Player');
