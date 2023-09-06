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

function toggleBackgroundColor(event) {
    if (bingoStarted) {
        var textarea = event.target;
        textarea.classList.toggle("marked");
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





var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');

var socket = new WebSocket(`wss://rosin-bingo.glitch.me?id=${id}`);

function connectWebSocket() {
    socket = new WebSocket(`wss://rosin-bingo.glitch.me?id=${id}`);
  
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

        if (message.startsWith("vote")) {
            // updateChart(message.substring(4));
        } else if (message.startsWith("start")) {
            // deleteChart();
            // createNewChart();
        } else if (message.startsWith("stopVoting")) {
            
        } else {
            // showData(JSON.parse(message)); // ARRAY in form von 
        }
    };
}

// Initialer Verbindungsaufbau
connectWebSocket();

function sendMessage() {
    const sendedTextareas = document.getElementsByTagName("textarea");
    sendedTextareas[0].classList
    var tableHtml = id; // HTML-Code des Tables als String erhalten
    tableHtml = addText(tableHtml, sendedTextareas);
    socket.send(tableHtml);
    // console.log('Nachricht an den Server gesendet:', tableHtml);
}

function addText(message, sendedTextareas) {
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