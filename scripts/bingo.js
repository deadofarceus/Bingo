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
        textarea.classList.toggle("white-background");
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








var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');

const socket = new WebSocket(`wss://crystal-reliable-slipper.glitch.me?id=${id}`);

// Event-Handler für Verbindungsereignisse
socket.onopen = function() {
    console.log('WebSocket-Verbindung hergestellt.');
};

socket.onclose = function() {
    console.log('WebSocket-Verbindung geschlossen.');
};

socket.onerror = function(error) {
    console.error('WebSocket-Fehler aufgetreten: ', error);
};

function sendMessage() {
    const table = document.getElementById('matrixTable');
    const sendedTextareas = document.getElementsByTagName("textarea");
    var tableHtml = id + table.innerHTML; // HTML-Code des Tables als String erhalten
    console.log(table);
    tableHtml = addText(tableHtml, sendedTextareas);
    socket.send(tableHtml);
    console.log('Nachricht an den Server gesendet:', tableHtml);
}

function addText(message, sendedTextareas) {
    for (let index = 0; index < sendedTextareas.length; index++) {
        message = message + "<textbegin>"
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