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

class ControlEvent {
    id;
    message;
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }
}

document.addEventListener('contextmenu', function(e) {
    sendPage();
    e.preventDefault();
}, false);

var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');
const type = params.get('type');

var socket;

function connectWebSocket() {
    socket = new WebSocket(`wss://modserver-dedo.glitch.me?id=${id}&type=${type}`);
    
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

        if (message === "reload") {
            window.location.reload();
            return;
        }

        document.documentElement.innerHTML = message;
    };
}

function ping() {
    socket.send("ping");
}

// Initialer Verbindungsaufbau
connectWebSocket();

function sendPage() {
    const control = new ControlEvent(id, document.documentElement.innerHTML);
    const mod = new ModEvent("control", control);
    socket.send(mod.tostring());
    console.log("Sended", mod);
}