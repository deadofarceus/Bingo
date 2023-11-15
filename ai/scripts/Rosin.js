class ModEvent {
    type;
    data;

    constructor(type, data) {
        this.type = type;
        this.data = data;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class AIMessageEvent {
    id;
    channel;
    message;
    APIKey;
    voiceName;
    voiceID;
    voiceSettings;
    
    constructor(id, channel, message, APIKey, voiceName, voiceID, voiceSettings) {
        this.id = id;
        this.channel = channel;
        this.message = message;
        this.APIKey = APIKey;
        this.voiceName = voiceName;
        this.voiceID = voiceID;
        this.voiceSettings = voiceSettings;
    }
}

var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const type = params.get('type');
const channel = params.get('channel');
const id = params.get('id');

const frankRedetGif = document.getElementById('frankDiv');

var socket;

function connectWebSocket() {
    socket = new WebSocket(`wss://modserver-dedo.glitch.me?id=${id}&type=${type}&channel=${channel}`);
    // socket = new WebSocket(`ws://localhost:8080?id=${id}&type=${type}&channel=${channel}`);
    
    setInterval(ping, 60000);

    socket.onopen = function () {
        console.log('WebSocket-Verbindung hergestellt.');
    };

    socket.onclose = function () {
        console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
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
        
        const data = JSON.parse(message)

        const headers = {
            "xi-api-key": data.APIKey,
            "Content-Type": "application/json"
        };

        const requestBody = JSON.stringify({
            text: data.message,
            voice_settings: data.voiceSettings,
            model_id: "eleven_multilingual_v2"
        });

        const response = fetch(`https://api.elevenlabs.io/v1/text-to-speech/${data.voiceID}`, {
            method: 'POST',
            headers: headers,
            body: requestBody
        })
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const audio = new Audio(url);

                audio.addEventListener('play', () => {
                    frankRedetGif.style.backgroundImage = `url(\"../resources/${data.voiceName}Redet.gif\")`;
                });

                audio.addEventListener('ended', () => {
                    frankRedetGif.style.backgroundImage = `url(\"../resources/${data.voiceName}stopp.png\")`;
                    var aiMessageEvent = new AIMessageEvent(id, channel, "audioended", undefined, undefined, undefined, undefined);
                    var modEvent = new ModEvent("ai/message", aiMessageEvent);
                    socket.send(JSON.stringify(modEvent));
                });

                audio.playbackRate = 1.05;

                audio.play();

            });
    };
}

function ping() {
    socket.send("ping");
}

// Initialer Verbindungsaufbau
connectWebSocket();