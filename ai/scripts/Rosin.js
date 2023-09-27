var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');

const randomVoiceSettings = {
    similarity_boost: 0.5,  // Ändere die Similarity Boost (beachte den zulässigen Bereich)
    stability: 0.7,  // Ändere die Stability (beachte den zulässigen Bereich)
    style: 1,  // Ändere den Style (beachte den zulässigen Bereich)
    use_speaker_boost: true  // Nutze Speaker Boost (true/false)
};

var socket;

function connectWebSocket() {
    socket = new WebSocket(`wss://rosin-bingo.glitch.me?id=${id}`);

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

        console.log(message);
        const data = JSON.parse(message)

        const headers = {
            "xi-api-key": data.api_key,
            "Content-Type": "application/json"
        };
    
        const requestBody = JSON.stringify({
            text: data.text,
            voice_settings: randomVoiceSettings
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
            audio.play();

            audio.addEventListener('ended', () => {
                const msg = id + "<audioended";
                socket.send(msg);
            });
        });
    };
}

// Initialer Verbindungsaufbau
connectWebSocket();