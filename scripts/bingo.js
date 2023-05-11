const prompts = [
    "Frank probiert ein Gericht und lobt es enthusiastisch",
    "Frank verwendet den Ausdruck \"Geschmacksexplosion\"",
    "Frank kritisiert die Sauberkeit in der K\u00FCche",
    "Frank spricht \u00FCber die Bedeutung von frischen Zutaten",
    "Frank stellt fest, dass das Restaurant zu viele Gerichte auf der Speisekarte hat",
    "Frank gibt dem Restaurantbesitzer eine ehrliche, aber konstruktive Kritik",
    "Frank spricht \u00FCber die Bedeutung von gutem Kundenservice",
    "Der Restaurantbesitzer weint, wenn Frank mit ihm spricht",
    "Frank entdeckt ein veraltetes oder unhygienisches K\u00FCchenger\u00E4t",
    "Das Restaurant hat einen originellen oder ungew\u00F6hnlichen Namen",
    "Frank spricht \u00FCber die Wichtigkeit einer klaren Zielgruppe f\u00FCr das Restaurant",
    "Der Restaurantbesitzer erkl\u00E4rt, dass er/sie das Restaurant aus Leidenschaft betreibt",
    "Frank spricht \u00FCber die Bedeutung von Marketing und Social Media f\u00FCr das Restaurant",
    "Ein Testesser findet das Essen ungenie\u00DFbar oder spuckt es aus",
    "Ein Testesser kritisiert die Portionengr\u00F6\u00DFe",
    "Frank zwinkert (kutcherGeil)",
    "Frank macht einen unglaublich unangenehmen Witz",
    "Frank macht unangenehme Ann\u00E4herungen einer Frau gegen\u00FCber",
    "Ein Testesser \u00E4u\u00DFert Bedenken hinsichtlich der Auswahl f\u00FCr vegetarische oder vegane G\u00E4ste",
    "Ein Testesser beschreibt ein Gericht als \"Geschmacksexplosion\", genau wie Frank es tun w\u00FCrde",
    "Frank macht einen \u00FCberraschten oder am\u00FCsierten Gesichtsausdruck aufgrund eines unerwarteten Kommentars eines Testessers",
    "Ein Testesser erw\u00E4hnt, dass er die Sendung \"Rosins Restaurants\" regelm\u00E4\u00DFig verfolgt",
    "Frank teilt eine Anekdote oder eine lustige Geschichte aus einer vergangenen Episode der Sendung",
    "MEGA",
    "Frank macht einen provokativen Kommentar \u00FCber die Kochk\u00FCnste des Restaurantbesitzers",
    "MEGA b2b",
    "MEGA b3b",
    "Der Restaurantbesitzer reagiert ver\u00E4rgert auf Franks harte Kritik und ger\u00E4t in eine hitzige Diskussion",
    "Frank fordert den Restaurantbesitzer auf, pers\u00F6nliche Probleme offenzulegen, was f\u00FCr Unbehagen sorgt",
    "Frank unterbricht den Restaurantbesitzer immer wieder, wenn dieser versucht, sich zu verteidigen",
    "Frank organisiert einen Foodtruck",
    "Bewertung erreicht 5 Sterne oder \u00FCber 45 Punkte",
    "Frank konfrontiert den Restaurantbesitzer mit seinen schlechten finanziellen Entscheidungen vor den Augen der Mitarbeiter",
    "Der Restaurantbesitzer versucht, Franks unangenehmen Bemerkungen mit Humor zu begegnen, aber es ist offensichtlich, dass er/sie verletzt ist",
    "Frank provoziert den Restaurantbesitzer, indem er seine F\u00FChrungsqualit\u00E4ten in Frage stellt",
    "Franks Team hat eine geheime Kamera\u00FCberwachung verwendet und ist stolz darauf.",
    "Der Besitzer merkt, dass Frank nur f\u00FCr den Content da ist und nicht um sein Restaurant zu retten",
    "Die Musik im Hintergrund \u00FCbert\u00F6nt die Dialoge der Personen und macht sie schwer verst\u00E4ndlich",
    "Die Musik wechselt in 10 Sekunden viel zu h\u00E4ufig",
    "W\u00E4hrend einer Besprechung zwischen Frank und dem Restaurantbesitzer \u00E4ndert sich pl\u00F6tzlich die Anordnung der Gegenst\u00E4nde auf dem Tisch",
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
            textarea.readOnly = true;
        }

        var startButton = document.getElementById("startButton");
        startButton.innerHTML = "Init new Bingo";
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

// Function to adjust the font size dynamically based on the text content
function adjustFontSize() {
    var textareas = document.getElementsByTagName("textarea");
    for (var i = 0; i < textareas.length; i++) {
        var textarea = textareas[i];
        textarea.style.fontSize = "25px"; // Reset font size
    
        // Calculate the height required to fit the content without scrolling
        var scrollHeight = textarea.scrollHeight;
        var clientHeight = textarea.clientHeight;
        var heightDiff = scrollHeight - clientHeight;
    
        // Adjust the font size based on the height difference
        if (heightDiff > 0) {
            var fontSize = parseInt(window.getComputedStyle(textarea).fontSize);
            var newFontSize = fontSize - heightDiff / 17; // Adjust the division factor as needed
            textarea.style.fontSize = newFontSize + "px";
        }
    }
}
  
// Call the adjustFontSize function whenever the content of a textarea changes
var textareas = document.getElementsByTagName("textarea");
for (var i = 0; i < textareas.length; i++) {
    textareas[i].addEventListener("input", adjustFontSize);
}
  