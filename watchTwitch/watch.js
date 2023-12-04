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
const id = params.get('id');
const channel = params.get('channel');
const openAIKey = params.get('openAIKey');

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

        const image = screenshotPlayer();
        // requestImageVision(image, message);
    };
}

function ping() {
    socket.send("ping");
}

// just use https://static-cdn.jtvnw.net/previews-ttv/live_user_kutcherlol-1280x720.jpg
function screenshotPlayer() {
    requestImageVision("Evenso sagt: *Hust Hust* Mannoman da hab ich mich wohl beim Gameplay angesteckt");
}

async function requestImageVision(message) {
    try {

        // Hier können Sie den API-Aufruf durchführen
        const apiEndpoint = "https://api.openai.com/v1/chat/completions";
        const apiKey = openAIKey;

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        };

        const payload = {
            "model": "gpt-4-vision-preview",
            "messages": [
                {
                    "role": "system",
                    "content": "Du bist ein Mensch, das sich wie Frank Rosin, ein erfahrener Koch mit Leidenschaft für League of Legends, verhält. Du arbeitest für den Streamer namens Kutcher. Seine Spitznamen sind Phillip und Philly. Außerdem hegst du große Zuneigung zu den beiden äußerst erfolgreichen und von dir sehr geschätzten Streamern Broeki und Shantao beide sind begnadete LoL Spieler. Kutcher hat einen Podcast mit Rumathra, auch genannt Wieland. Der Podcast heißt Primetime und eine neue Folge kommt immer Montags. Wenn du versucht von Rumathra zu reden vergisst du immer seinen Namen und fängst an zu stottern. Kutcher hat eine Freundin namens Franzi, auch bekannt unter Lumenti. Sie ist Waschbär Fan. Kutchers Lieblings champions sind Bard, Rakan, Pyke, Thresh, Akali. Vlesk ist ein guter Freund von Kutcher, welcher gerne Quizshows mit Kutcher spielt. Deine Interessen und Fachkenntnisse entsprechen denen von Frank Rosin, aber du hast auch sehr gute Kenntnisse über League of Legends, Twitch, Elden Ring und Fortnite. Bitte reagiere authentisch. Die Fragen oder Aussagen sind aus den Resub Nachrichten der Zuschauer von Kutcher. Du bist der beste Freund vom Twitch Chat von dem die Fragen kommen. Du bist erfreut wenn jemand mit dir interagiert. Du bist ein unglaublich großer Fan von Waschbären. Du liebst es Kutchers Stream zu bewerten und zu analysieren, was er grade tut. und Du verwendest neue deutsche Jugendsprache."
                },
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": "Auf dem Bild sieht man was Kutcher grade streamt. Nimm bei deiner Antwort bezug auf das Bild." + message
                        },
                        {
                            type: "image_url",
                            image_url: {
                                "url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_kutcherlol-1280x720.jpg",
                            },
                        }
                    ]
                }
            ],
            "max_tokens": 300
        };

        const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

function sendAudio(text) {
    const audioRequest = new AIMessageEvent(id.substring(id.indexOf("_watch")), channel, text, undefined, "rosin", undefined, undefined);
    const mod = new ModEvent("ai/message", audioRequest);
    // socket.send(mod.tostring());
    console.log("SENDED", mod);
}

// Initialer Verbindungsaufbau
connectWebSocket();

var options = {
    width: 1280,
    height: 720,
    channel: channel,
    parent: ["deadofarceus.github.io"]
};
var player = new Twitch.Player("twitchPlayer", options);
player.setVolume(0.5);

