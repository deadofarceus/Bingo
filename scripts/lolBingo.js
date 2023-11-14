const prompts = [
    "\"GG\" nach nicht einmal 5 minuten",
    "Broeki stirbt f\u00fcr Farm",
    "\"Jungle ist die most broken role\"",
    "schlecht gespielter towerdive",
    "Botlane muss leashen",
    "\"trust me\" call im teamchat",
    "Broeki beschwert sich \u00fcber 50% WR Balancing",
    "deutsche Ingamechatter",
    "Topside geht 0/10",
    "1v9 Performance von Broeki",
    "\"wie kann man einfach so schlecht sein\"",
    "Ghoster",
    "\"im Competitive\"",
    "Supporter pusht randomly",
    "Baronsteal",
    "Mitspieler wird gelobt",
    "Jungler smited den Cannon im Early",
    "Broeki w\u00fcnscht sich Alkohol",
    "Firstblood vor Minute 3",
    "Broeki stirbt 1 vs 1 gegen den gegnerischen ADC",
    "GameWin",
    "Jungler ganked ohne Botlane Unterst\u00fctzung",
    "Broeki lobt sich selbst",
    "Viewergame",
    "Broeki steht auf und macht die Cam aus",
    "\"Das ist Diamond / Master Elo?\"",
    "Supporter geht tilt-roamen",
    "Broeki bricht sich die H\u00e4nde",
    "Cannon miss",
    "\"lasst mich einfach in Ruhe\"",
    "FF Vote into Win",
    "RIOOOOOT",
    "Triplekill von Broeki",
    "\"ich bin ja soooo gut\"",
    "Nach dem Spiel wird jemand reported",
    "Broeki erkl\u00e4rt seinem Supporter, wie er zu spielen hat",
    "Broeki flamed sich selbst ",
    "\"eine wave noch\"",
    "Broeki vergleicht seinen support mit Karni",
    "Mental Breakdown",
    "Enemy Midlaner war \u00F6fter unten als der eigene Jungler",
    "Jungler pusht die Lane nicht mit raus",
    "\"ich bin einfach alt\"",
    "Shutdowns werden unn\u00F6tig abgegeben",
    "Jungler bekommt keinen leash",
    "Broeki beschwert sich \u00fcber Hitboxen",
    "Spells upgraden mit der Maus",
    "10CS/min am Ende des Games",
    "Broeki erzielt Firstblood",
    "Supporter schaut Broeki beim sterben zu",
    "Broeki regt sich \u00fcber die ADC Rolle auf",
    "Spiel geht \u00fcber die 30. Minute hinaus ",
    "Towerdive auf Botlane",
    "freundliche Mitspieler im Chat ",
    "Winning 2v2 Fight auf der Botlane",
    "Da fehlen mir die Worte",
    "Broeki spielt wie ein junger Gott",
    "Eigenes Team bekommt first Drake",
    "Game wird gethrowed",
    "Jungler wird verbal kritisiert",
    "Broeki chatted",
    "Broeki verl\u00e4sst ohne m\u00F6gliches Pinkward die Base",
    "hard losing Sololane",
    "Broeki lacht aus Verzweiflung",
    "Broeki flamed den Gegner ",
    "Riots balancing ist einfach schlecht",
    "Broeki vergibt random Namen",
    "positive KDA bei Minute 15 ",
    "random invade ohne Cover",
    "we got this im Teamchat",
    "Broeki wird spampinged",
    "Es wird gesungen",
    "muss man m\u00F6gen",
    "Hass auf Riot Games",
    "Jungler ignoriert Fight auf der Botlane",
    "\"wie kann man nur so sein\"",
    "Supporter stirbt f\u00fcr nen Pinkward",
    "Broeki dodged 3 Spells hintereinander in einem Play",
    "Broeki wird geonehitted",
    "Broeki startet den FF Vote",
    "Broeki wird gecarried",
    "Support geht roamen",
    "\"das darfst du nicht machen\"",
    "Broeki unterbricht sich selbst beim flamen",
    "Jungle Diff Call",
    "\"Jeder lower Elo Spieler k\u00F6nnte das genauso machen\"",
    "\"Silber Larry\"",
    "Es werden mehr als 2 Drakes gemacht",
    "First Baron geht ans eigene Team",
    "Broeki hat mehr als 200cs",
    "\"Das Ding ist\"",
    "Broeki wird vor lvl 7 geoneshotted",
    "100  CS in der 10. Minute",
    "Jungler startet Objetive ohne Prio",
    "Broeki pingt einen Ward",
    "FF Vote wird permanent gespammt",
    "Broeki overstayed",
    "Hass auf Assassinen",
    "Broeki wird hostage gehalten",
    "Broeki stirbt f\u00fcr Towerplating",
    "Supporter pusht die Lane nicht raus",
    "Jungler macht lieber Gromp, anstatt zu helfen",
    "Report Feedback Meldung nach dem Game",
    "Broeki f\u00e4ngt an zu schreiben, aber sendet es nicht ab",
    "beide Sololanes verlieren",
    "Beleidigung an Mitspieler",
    "AFKler",
    "\"kein gutes Gamedesign\"",
    "Broeki redet auf englisch (mind. 5 W\u00F6rter)",
    "FF15 - egal welches Team",
    "Broeki fightet den Gegner in einer Wave",
    "Herald wird Botlane geplaced",
    "\"not so hot\"",
    "Broeki beschwert sich \u00fcber 50% Winrate balancing",
    "Broeki hat einen Deutschen im Team",
    "Broeki bricht sich die H\u00e4nde",
    "Ragequit von einem im Game",
    "Wir werden Zeuge von ADC treatment",
    "Er macht alles Falsch",
    "Durschnittlich 2 Kills pro Minute am Ende",
    "Broeki hat ein 700 Gold Shutdown",
    "Broeki full muted mindestens ein Spieler",
    "Broeki steht 4/0 nach 10 Minuten",
    "\"Cringelord\"",
    "Broeki ist der letzte \u00fcberlebende nach denem TF",
    "Broeki hatte Spa\u00df ",
    "Broeki hat 0 Tode Enemy ADC 5 Kills",
    "Game geht \u00fcber 30 Minuten",
    "Das geh\u00F6rt gebannt",
    "Broekis Support pickt einen normalen Supp",
    "\"Ich hab so geinted\"",
    "\"Danach hat keiner Gefragt\"",
    "Cannon miss",
    "\"Game ist noch Winnable\" (so oder so \u00e4hnlich)",
    "Positive KDA am ende des Games",
    "Game geht \u00fcber 30 Minuten",
    "Broeki steht auf und macht die Cam aus",
    "Mitspieler wird gelobt",
    "Broeki finde den Support mindestens ok",
    "Broeki bekommt Lust auf einen Champ",
    "Broeki m\u00F6chte einen Engage von seinem Support",
    "Broeki trifft einen Long Range Arrow",
    "Jungler bekommt keinen Leash",
    "Jemand TP'd auf Bot w\u00e4hrend Broeki da ist",
    "Broeki wird alleine gelassen vom Support",
    "1v9 Performance von Broeki",
    "Broeki bekommt den Tower vor der Enemy Bot",
    "Broeki hat das Ornn Item Upgrade",
    "Broeki ist am Ende des Game ahead in CS",
    "Broeki startet einmal einen FF Vote",
    "Broeki honor'd einen Spieler",
    "Broeki w\u00fcnscht sich Alkohol",
    "Broeki tilted nicht",
    "Viewergame - mindestens einer erkennt Broeki",
    "Broeki kauft keinen Ward obwohl es n\u00F6tig w\u00e4re",
    "Erkl\u00e4rb\u00e4r Broeki ",
    "Vortrag \u00fcber Assassins",
    "Thunny nennt Broeki Broeki1",
    "ff Vote Minute 15",
    "Broeki sagt von seinem eigenen Champ das er schlecht ist",
    "Broeki sagt von sich selber, dass er alt ist"
];

var bingoStarted = false;
const randomizeButtons = document.getElementsByClassName("randomButton");
const startButton = document.getElementById("startButton");

// Call the adjustTextSize function whenever the content of a textarea changes
const textareas = document.getElementsByTagName("textarea");
for (var i = 0; i < textareas.length; i++) {
    textareas[i].addEventListener("input", adjustTextSize);
}

function startBingo() {
    if(bingoStarted) {
        location.reload();
    } else {
        speichernBingo();
        for (var i = 0; i < randomizeButtons.length; i++) {
            var button = randomizeButtons[i];
            button.onclick = null;
        }
        bingoStarted = true;
        for (var i = 0; i < textareas.length; i++) {
            var textarea = textareas[i];
            textarea.classList.add("clickable");
            textarea.addEventListener("click", toggleBackgroundColor);
            textarea.addEventListener("contextmenu", toggleImpossible);
            textarea.addEventListener("contextmenu", sendMessage);
            textarea.addEventListener("click", sendMessage);
            textarea.readOnly = true;
        }
        
        startButton.innerHTML = "Init new Bingo";
        sendMessage();
    }
}

function randomizeArea(index) {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const sentence = prompts[randomIndex];
    textareas[index].value = sentence;

    adjustTextSize();
}

const pattern = /\d+\/\d+/;
const numberPattern = /\d+/;
const slashPattern = /\//;

function toggleBackgroundColor(event) {
    if (bingoStarted) {
        var textarea = event.target;
        const oldText = textarea.value;
        textarea.value = replaceFirstNumber(textarea.value);
        if (oldText === textarea.value || checkNumbersEqual(textarea.value)) {
            if (textarea.classList.contains("impossible")) {
                textarea.classList.toggle("impossible");
            }
            textarea.classList.toggle("marked");
        }
    }
}

function checkNumbersEqual(input) {
    const match = input.match(pattern);

    if (match) {
        const firstNumber = parseInt(input.match(numberPattern)[0], 10);
        const secondNumber = parseInt(input.substring(input.match(slashPattern).index).match(numberPattern)[0], 10);

        return firstNumber === secondNumber;
    }

    return true;
}

function replaceFirstNumber(input) {
    const match = input.match(pattern);

    if (match) {
        const firstNumber = parseInt(input.match(numberPattern)[0], 10);
        const secondNumber = parseInt(input.substring(input.match(slashPattern).index).match(numberPattern)[0], 10);

        if (firstNumber !== secondNumber) {
            const incrementedFirstNumber = firstNumber + 1;
            const replacedString = input.replace(pattern, `${incrementedFirstNumber}/${secondNumber}`);
            return replacedString;
        }
    }

    return input;
}

function toggleImpossible(event) {
    event.preventDefault();
    if (bingoStarted) {
        var textarea = event.target;
        if (textarea.classList.contains("marked")) {
            textarea.classList.toggle("marked");
        }
        textarea.classList.toggle("impossible");
    }
}

function adjustTextSize() {
    for (var i = 0; i < textareas.length; i++) {
        var textarea = textareas[i];
        textarea.style.fontSize = "25px"; // Reset font size
    
        var contentHeight = textarea.scrollHeight;
        var textareaHeight = textarea.clientHeight;
        
        // Calculate the ratio of content height to textarea height
        var ratio = contentHeight / textareaHeight;
        
        // Adjust the font size based on the ratio
        var fontSize = 25; // Initial font size
        var maxFontSize = 40; // Maximum font size
        var minFontSize = 14; // Minimum font size
        
        // Calculate the new font size within the specified range
        var newFontSize = Math.max(minFontSize, Math.min(maxFontSize, fontSize / ratio));
        
        textarea.style.fontSize = newFontSize + "px";
    }
}

function speichernBingo() {
    const textareasv2 = document.getElementsByTagName("textarea");
    const textareaContent = {};

    for (let i = 0; i < textareasv2.length; i++) {
        const textarea = textareasv2[i];
        const textareaValue = textarea.value;
        textareaContent[i] = textareaValue;
    }

    const bingoTable = JSON.stringify(textareaContent);

    localStorage.setItem("Rosinbingo", bingoTable);

    // console.log("SPEICHERN  MIT      " + bingoTable);
}
  
// Funktion zum Abrufen des gespeicherten Werts beim Laden der Seite
window.onload = function() {
    var bingoTable = localStorage.getItem("Rosinbingo");

    if (bingoTable) {
        const textareaContent = JSON.parse(bingoTable);
        const textareasv3 = document.getElementsByTagName("textarea");

        for (const textareaId in textareaContent) {
            textareasv3[textareaId].value = textareaContent[textareaId];
        }
    }
    adjustTextSize();

    // console.log("REALOAD MIT" + bingoTable);
};


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

class LOLBingoEvent {
    id;
    channel;
    bingoCards;

    constructor(id, channel, bingoCards) {
        this.id = id;
        this.channel = channel;
        this.bingoCards = bingoCards;
    }
}


var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');
const type = params.get('type');
const channel = params.get('channel');

var socket;

function connectWebSocket() {
    socket = new WebSocket(`wss://modserver-dedo.glitch.me?id=${id}&type=${type}&channel=${channel}`);
    // socket = new WebSocket(`ws://localhost:8080?id=${id}&type=${type}&channel=${channel}`);
    
    setInterval(ping, 60000);
    
    socket.onopen = function() {
      console.log('WebSocket-Verbindung hergestellt.');
    };

    socket.onclose = function() {
      console.log('WebSocket-Verbindung geschlossen. Versuche erneut zu verbinden...');
      setTimeout(connectWebSocket, 2000); // Verbindung nach 2 Sekunden erneut aufbauen
    };
  
    socket.onerror = function(error) {
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

function sendMessage() {
    const sendedTextareas = document.getElementsByTagName("textarea");
    var bingocards = addText(sendedTextareas);
    var bingoEvent = new LOLBingoEvent(id, channel, bingocards)
    var modEvent = new ModEvent("LolBingo/bingo", bingoEvent);
    socket.send(JSON.stringify(modEvent));
    console.log('Nachricht an den Server gesendet:', JSON.stringify(modEvent));
}

function addText(sendedTextareas) {
    var message = "";
    for (let index = 0; index < sendedTextareas.length; index++) {
        message = message + "<textbegin><" + sendedTextareas[index].classList +">"
        message = message + sendedTextareas[index].value;
    }
    message = message + "<textbegin>"
    return message;
}

var mega = 0;
const megaText = document.getElementById("megaCounter");

function megaCounter() {
    mega++;
    megaText.innerText = mega;
}

function reset() {
    mega = 0;
    megaText.innerText = 0;
}