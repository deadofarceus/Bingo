var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');
const channel = params.get('channel');

var socket;

function connectWebSocket() {
    socket = new WebSocket(`wss://modserver-dedo.glitch.me?id=${id}&channel=${channel}`);

    setInterval(ping, 60000);

    socket.onopen = function () {
        console.log('WebSocket-Verbindung hergestellt.');
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

        if (message === "pong") {
            return;
        }
    };
}

function ping() {
    socket.send("ping");
}

// Initialer Verbindungsaufbau
connectWebSocket();

var options = {
    width: 1280,
    height: 720,
    channel: channel,
    // only needed if your site is also embedded on embed.example.com and othersite.example.com
    parent: ["deadofarceus.github.io"]
};
var player = new Twitch.Player("twitchPlayer", options);
player.setVolume(0.5);

