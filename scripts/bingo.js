const prompts = [
    "Frank probiert ein Gericht und lobt es enthusiastisch",
    "Frank verwendet den Ausdruck \"Geschmacksexplosion\"",
    "Frank kritisiert die Sauberkeit in der K\u00FCche",
    "Frank spricht \u00FCber die Bedeutung von frischen Zutaten",
    "Zu viele Gerichte auf der Speisekarte",
    "Frank gibt tats\u00E4chlich konstruktive Kritik",
    "Frank spricht \u00FCber die Bedeutung von gutem Kundenservice",
    "Der Besitzer weint, wenn Frank mit ihm spricht",
    "Frank entdeckt ein veraltetes oder unhygienisches K\u00FCchenger\u00E4t",
    "Das Restaurant hat einen originellen oder ungew\u00F6hnlichen Namen",
    "Frank spricht \u00FCber die Wichtigkeit einer klaren Zielgruppe f\u00FCr das Restaurant",
    "Der Restaurantbesitzer betreibt das Restaurant aus voller Leidenschaft",
    "Frank spricht \u00FCber die Bedeutung von Marketing f\u00FCr das Restaurant",
    "Ein Testesser findet das Essen ungenie\u00DFbar oder spuckt es aus",
    "Ein Testesser kritisiert die Portionengr\u00F6\u00DFe",
    "Frank zwinkert (kutcherGeil)",
    "Frank macht einen unglaublich unangenehmen Witz",
    "Frank macht unangenehme Ann\u00E4herungen einer Frau gegen\u00FCber",
    "Ein Testesser beschwert sich \u00FCber die Auswahl f\u00FCr vegetarische oder vegane G\u00E4ste",
    "Ein Testesser beschreibt ein Gericht als \"Geschmacksexplosion\", genau wie Frank es tun w\u00FCrde",
    "Frank macht einen \u00FCberraschten Gesichtsausdruck aufgrund eines Kommentars eines Testessers",
    "Ein Testesser erw\u00E4hnt, dass er die Sendung \"Rosins Restaurants\" verfolgt",
    "Frank teilt eine Anekdote aus einer vergangenen Episode der Sendung",
    "MEGA",
    "Frank macht einen provokativen Kommentar \u00FCber die Kochk\u00FCnste des Besitzers",
    "MEGA b2b",
    "MEGA b3b",
    "Der Besitzer reagiert ver\u00E4rgert auf Franks harte Kritik und ger\u00E4t in eine hitzige Diskussion",
    "Frank fordert den Besitzer auf, pers\u00F6nliche Probleme offenzulegen, was f\u00FCr Unbehagen sorgt",
    "Frank unterbricht den Besitzer, wenn dieser versucht, sich zu verteidigen",
    "Frank organisiert einen Foodtruck",
    "Bewertung erreicht 5 Sterne oder \u00FCber 45 Punkte",
    "Frank konfrontiert den Besitzer mit seinen schlechten finanziellen Entscheidungen vor den Augen der Mitarbeiter",
    "Frank provoziert den Besitzer, indem er seine F\u00FChrungsqualit\u00E4ten in Frage stellt",
    "Franks Team hat eine geheime Kamera\u00FCberwachung verwendet und ist stolz darauf.",
    "Der Besitzer merkt, dass Frank nur f\u00FCr den Content da ist und nicht um sein Restaurant zu retten",
    "Die Musik im Hintergrund \u00FCbert\u00F6nt die Dialoge der Personen und macht sie schwer verst\u00E4ndlich",
    "Die Musik wechselt in wenigen Sekunden viel zu h\u00E4ufig",
    "W\u00E4hrend einer Besprechung zwischen Frank und dem Besitzer \u00E4ndert sich pl\u00F6tzlich das Szenenbild",
    "Frank Nackengriff",
    "Philly sch\u00E4tzt die Bewertung von einem der Testessen richtig",
    "Frank spricht mit vollem Mund",
    "Frank hat sowas vorher noch nie erlebt",
    "Frank sagt \"So mein Freund\"",
    "Ein Testesser bem\u00E4ngelt exakt das selbe wie Frank",
    "Speisen sind viel zu gro\u00DF",
    "Speisen sind viel zu klein",
    "Mintgr\u00FCnes Umstyling",
    "Es wird auf eine winzige kaputte Stelle gezoomt um zu zeigen wie dreckig/kaputt es ist",
    "Frank droht mit dem Abbruch",
    "Mitarbeiter wird wegen des Aussehen fertig gemacht",
    "\"Kulinarische Idee\"",
    "Corona-Pulli w\u00E4hrend Corona",
    "Frank parkt viel zu weit weg",
    "\"Deutsche Hausmannskost\" auf der neuen Karte",
    "Frank imitiert einen Dialekt/Akzent sehr schlecht (und findet sich deshalb lustig)",
    "Frank wird pl\u00F6tzlich Sauer ohne Grund",
    "Besitzer*in lobt Rosin in h\u00F6chsten T\u00F6nen, muss den Text aber ablesen",
    "Philly kommt zwischendurch mit einem Essens-L-Take",
    "Erste gereworkte Speisekarte ist M\u00FCll",
    "Frank erotisiert Essen",
    "Touchy Frank ist touchy (viel zu oft)",
    "Frank versteckt Sterne (egal ob am Anfang oder Ende)",
    "Katy Perry Song",
    "Die K\u00FCchenhilfe ist besser als der Koch",
    "Ein Kind liest einen Satz komplett ab",
    "Keiner der Besitzer ist gelernter Gastronom",
    "Schulden werden ohne \"tausend\" genannt",
    "Frank bel\u00E4stigt mehr als eine Frau",
    "Frank kommt fremden Kindern zu nahe",
    "Kamera verfolgt eine Person die alleine gelassen werden m\u00F6chte",
    "Entscheidung: Laden schlie\u00DFen oder radikaler Neustart",
    "Personen haben gar kein Bock mehr auf Aufnahmen",
    "Unangenehm langes H\u00E4ndehalten/-sch\u00FCtteln",
    "Die Küche ist gut, aber frank findet sie schei\u00DFe",
];
// Retrieve the matrix from localStorage
var matrix = JSON.parse(localStorage.getItem("bingoMatrix"));

// Generate the matrix table
var matrixTable = document.getElementById("matrixTable");
for (var i = 0; i < matrix.length; i++) {
  var row = matrixTable.insertRow(i);
  for (var j = 0; j < matrix[i].length; j++) {
    var cell = row.insertCell(j);
    var input = document.createElement("textarea");
    input.type = "text";
    input.value = matrix[i][j];
    cell.appendChild(input);
  }
}

var bingoStarted = false;
var randomizeButton = document.getElementById("randomizeButton");

function startBingo() {
    if(bingoStarted) {
        window.location.href = "index.html";
    } else {
        speichernBingo();
        randomizeButton.remove();
        bingoStarted = true;
        for (var i = 0; i < textareas.length; i++) {
            var textarea = textareas[i];
            textarea.classList.add("clickable");
            textarea.addEventListener("click", toggleBackgroundColor);
            textarea.addEventListener("click", sendMessage);
            textarea.readOnly = true;
        }

        var startButton = document.getElementById("startButton");
        startButton.innerHTML = "Init new Bingo";
        sendMessage();
    }
}

function randomizeBingo() {
    const textareas = document.getElementsByTagName("textarea");
    const numOfRequestedSentences = matrix[0].length * matrix.length;
    const totalSentences = prompts.length;
    var selectedSentences = [];
    
    if (numOfRequestedSentences <= totalSentences) {
        while (selectedSentences.length < numOfRequestedSentences) {
            const randomIndex = Math.floor(Math.random() * totalSentences);
            const sentence = prompts[randomIndex];
            if (!selectedSentences.includes(sentence)) {
                selectedSentences.push(sentence);
            }
        }
    } else {
      console.log("Not enough sentences available.");
    }
  
    for (var i = 0; i < textareas.length; i++) {
        var textarea = textareas[i];
        textarea.value = selectedSentences[i] || "";
    }
    adjustFontSize();
}

function toggleBackgroundColor(event) {
    if (bingoStarted) {
        var textarea = event.target;
        textarea.classList.toggle("marked");
    }
}

function adjustFontSize() {
    var textareas = document.getElementsByTagName("textarea");
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
        textarea.style.height = (650 - ((matrix.length + 1) * 5))/matrix.length + "px";
    }
}
  
// Call the adjustFontSize function whenever the content of a textarea changes
const textareas = document.getElementsByTagName("textarea");
for (var i = 0; i < textareas.length; i++) {
    textareas[i].addEventListener("input", adjustFontSize);
}






function speichernBingo() {
    var bingoTable = document.getElementById("matrixTable").innerHTML;
    const sendedTextareas = document.getElementsByTagName("textarea");
    bingoTable = addText(bingoTable, sendedTextareas);
    localStorage.setItem("bingoTable", bingoTable);
    console.log("SPEICHERN  MIT      " + bingoTable);
}
  
// Funktion zum Abrufen des gespeicherten Werts beim Laden der Seite
window.onload = function() {
    var bingoTable = localStorage.getItem("bingoTable");
    if (bingoTable) {
        document.getElementById("matrixTable").innerHTML = renderTable(bingoTable);
        renderText(bingoTable);
    }
    console.log("REALAD MIT" + bingoTable);
};

function renderTable(tableHtml) {
    const endIndex = tableHtml.indexOf("<textbegin>");
    if (endIndex !== -1) {
        return tableHtml.substring(0, endIndex);
    }
    return tableHtml;
}

function renderText(tableHtml) {
    const textareas = document.getElementsByTagName("textarea");

    let startIndex = tableHtml.indexOf("<textbegin>");
    let endIndex = tableHtml.indexOf("<textbegin>", startIndex + 1);
    
    for (let index = 0; index < textareas.length; index++) {
        if (startIndex !== -1 && endIndex !== -1) {
            startIndex = startIndex + 13;
            const example = tableHtml.substring(startIndex, endIndex);
            textareas[index].textContent = example.trim();
            startIndex = endIndex;
            endIndex = tableHtml.indexOf("<textbegin>", startIndex + 1);
        } else {
            textareas[index].textContent = "";
        }
    }
}





var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');

var socket = new WebSocket(`wss://crystal-reliable-slipper.glitch.me?id=${id}`);

function connectWebSocket() {
    socket = new WebSocket(`wss://crystal-reliable-slipper.glitch.me?id=${id}`);
  
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
}

// Initialer Verbindungsaufbau
connectWebSocket();

function sendMessage() {
    const table = document.getElementById('matrixTable');
    const sendedTextareas = document.getElementsByTagName("textarea");
    sendedTextareas[0].classList
    var tableHtml = id + table.innerHTML; // HTML-Code des Tables als String erhalten
    console.log(table);
    tableHtml = addText(tableHtml, sendedTextareas);
    socket.send(tableHtml);
    console.log('Nachricht an den Server gesendet:', tableHtml);
}

function addText(message, sendedTextareas) {
    for (let index = 0; index < sendedTextareas.length; index++) {
        message = message + "<textbegin><" + sendedTextareas[index].classList +">"
        message = message + sendedTextareas[index].value;
    }
    message = message + "<textbegin>"
    return message;
}

function generateTableHtml(table, textareas2) {
    let html = '';

    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        html += '<tr>';

        for (let j = 0; j < row.cells.length; j++) {
            const cell = row.cells[j];
            const textarea = textareas2[i * row.cells.length + j];
            html += `<td>${textarea.value}</td>`;
        }

        html += '</tr>';
    }

    return html;
}