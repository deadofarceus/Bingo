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

const text = document.getElementById('test');

var socket;

function connectWebSocket() {
    socket = new WebSocket(`wss://modserver-dedo.glitch.me?id=${id}`);
    // socket = new WebSocket(`ws://localhost:8080?id=${id}&type=${type}&channel=${channel}`);
    
    setInterval(ping, 60000);

    socket.onopen = function () {
        console.log('WebSocket-Verbindung hergestellt.');
        socket.send("getLeagueData");
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
        
        const data = JSON.parse(message)

        text.innerHTML = JSON.stringify(data);
    };
}

function ping() {
    socket.send("ping");
}

// Initialer Verbindungsaufbau
connectWebSocket();