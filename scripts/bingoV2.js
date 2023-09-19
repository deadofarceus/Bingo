const prompts = [
    "Frank probiert ein Gericht und lobt es enthusiastisch",
    "Frank verwendet den Ausdruck \"Geschmacksexplosion\"",
    "Frank kritisiert die Sauberkeit in der K\u00FCche",
    "Frank spricht \u00FCber die Bedeutung von frischen Zutaten",
    "Zu viele Gerichte auf der Speisekarte",
    "Frank gibt tats\u00E4chlich konstruktive Kritik",
    "Frank spricht \u00FCber die Bedeutung von gutem Kundenservice",
    "Der Besitzer weint, wenn Frank mit ihm spricht",
    "Das Restaurant hat einen originellen oder ungew\u00F6hnlichen Namen",
    "Ein Testesser kritisiert die Portionengr\u00F6\u00DFe",
    "Frank zwinkert (kutcherGeil)",
    "Frank macht einen unglaublich unangenehmen Witz",
    "Frank teilt eine Anekdote aus einer vergangenen Episode der Sendung",
    "MEGA",
    "Frank macht einen provokativen Kommentar \u00FCber die Kochk\u00FCnste des Besitzers",
    "MEGA b2b",
    "Frank unterbricht den Besitzer, wenn dieser versucht, sich zu verteidigen",
    "Frank organisiert einen Foodtruck",
    "Bewertung erreicht 5 Sterne oder \u00FCber 45 Punkte",
    "Frank konfrontiert den Besitzer mit seinen schlechten finanziellen Entscheidungen vor den Augen der Mitarbeiter",
    "Frank provoziert den Besitzer, indem er seine F\u00FChrungsqualit\u00E4ten in Frage stellt",
    "Franks Team hat eine geheime Kamera\u00FCberwachung verwendet und ist stolz darauf.",
    "Der Besitzer merkt, dass Frank nur f\u00FCr den Content da ist und nicht um sein Restaurant zu retten",
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
    "Die K\u00FCche ist gut, aber Frank findet sie schei\u00DFe",
    "Frank fragt, wie es einem damit geht",
    "Frank erkl\u00E4rt wie man Preise kalkuliert",
    "Frank ist seine Portion beim Testessen auf",
    "Frank k\u00FCsst 2 oder mehr der Teilnehmer*Innen auf Wange oder Stirn",
    "Frank muss sich das durch den Kopf gehen lassen",
    "Schulden \u00FCber 20k",
    "Weniger als 20 oder 2 Sterne",
    "Franks Kindheit wird erw\u00E4hnt",
    "Adele Song",
    "2 oder mehr Frank Zwinkerer",
    "4 oder mehr T\u00FCrmonologe",
    "K\u00FCchenchef ist kein gelernter Koch",
    "Untertitel, obwohl man alles versteht",
    "Franks Nackengriff",
    "Punktedifferenz von 25 oder mehr",
    "Testesser*in meint Fleisch ist \"zu trocken\"",
    "Frank macht einen schlechten Witz",
    "Lebensmittel aus eine bestimmten Region sollen verwendet werden",
    "Es wird erw\u00E4hnt, dass Frank 2 Sterne hat",
    "Service rettet die Punktzahl",
    "Im Restaurant gibt es Schnitzel (auf der Karte)",
    "Etwas wird mit Wei\u00dfwein abgel\u00F6scht",
    "Testesser kritisiert das gleiche wie Frank",
    "Lob/Dank an Frank klingt absolut abgelesen und emotionslos",
    "Frank will mit Partner*in der betreibenden Person alleine gelassen werden",
    "Frank wird f\u00E4lschlicherweise als 2 Sterne Koch bezeichnet / Philly kommentiert es",
    "Frank will \"Eigeninitiative\" sehen",
    "Frank sagt \"Du kannst es doch!\"",
    "Besitzer \"verstecken\" sich vor Frank",
    "Unn\u00F6tige Motivationsrede",
    "Frank slappt das Fleisch",
    "Frank erkl\u00E4rt wo etwas herkommt",
    "Frank bekommt einen Geschmacksorgasmus beim Probieren seiner eigenen Gerichte",
    "Frank schmatzt",
    "Chat called Bingo obwohl es keines gab hide",
    "Frank l\u00E4stert vor der Kamera \u00fcber eine Person, die direkt hinter/neben ihm steht",
    "Philly bezichnet Franks Outfit als swaggy",
    "Frank tanzt",
    "Unangenehmes Wortspiel",
    "Frank sagt \"...., dann wird ein Schuh draus\"",
    "Frank erw\u00E4hnt sein eigenes Restaurant",
    "\"Buongiorno\"",
    "Frank fragt \"Wie geht es dir dabei?\"",
    "Einwohnerzahl des Ortes wird erw\u00E4hnt",
    "Philly macht Werbung f\u00fcr seine Musik",
    "(Haus)aufgaben nicht gemacht",
    "Frank mag die Betreiber und hilft nur deshalb aka Frank spielt Empathie vor",
    "Frank sagt 3 mal Speisenkarte",
    "Philly kommt zwischendurch mit einem Essens-W-Take hide",
    "Philly schafft die perfekte Folge hide",
    "Philly singt hide",
    "Philly sagt \"boah da h\u00e4tte ich jetzt auch Bock drauf\"hide",
    "Philly kommt mit \"Braunschweig ist gr\u00f6\u00dfer\" an hide",
    "Philly kritisert das selbe wie Frank/Testesser hide",
    "unn\u00f6tige Diskussion mit VAR \u00fcber ein Bingo",
    "Frank umarmt  sehr lange",
    "Frank gibt Bussi",
    "Frank gibt einer Frau einen unangenehmen Kosenamen",
    "Frank wird ausnahmsweise betoucht",
    "\"kulinarische Linie\"",
    "\"Sexy\"",
    "Frank haut \"Alte S\u00e4ule\" raus",
    "Frank sagt \"Ich muss mir alles erstmal durch den Kopf gehen lassen\"",
    "Frank fragt sich \"Wo sind denn alle?\"",
    "Frank sagt \"ich k\u00fcmmere mich drum\"",
    "Frank sagt \"ich habe die ganze Nacht dran gesessen\"",
    "Frank macht Werbung f\u00fcr Kabel1.de",
    "Frank macht Werbung f\u00fcr kabel1.de und zwinkert anschlie\u00dfend",
    "Frank imitiert den Besitzer/Koch nach",
    "Frank redet von S\u00e4ure",
    "Frank erw\u00e4hnt, dass es jetzt nur noch 2 Optionen gibt",
    "Frank betont, dass es die (aller)letzte Chance sei",
    "Frank l\u00e4sst unterschwellig verlauten, dass er besser kochen kann als der Koch",
    "Frank nennt sich selbst \"Rose\"",
    "Frank knetet gen\u00fcsslich den Teig",
    "Frank zerrei\u00dft mindestens zwei Bl\u00e4tter Papier",
    "Frank kommt mit Ultimatum \"schlie\u00dfen oder Neustart\"",
    "Frank baited bei der Bewertung",
    "Frank will mit jemanden alleine reden",
    "Frank singt",
    "Frank will in der Nationalmannschaft spielen",
    "Frank \"braucht mal 2 Minuten\"",
    "Frank streichelt seinen Bauch",
    "Frank muss mal raus",
    "Frank kann nicht mehr",
    "Frank gibt sich als Finanzexperte aus",
    "Frank gibt sich als Therapeut aus",
    "Frank gibt sich als Motivationscoach aus",
    "Frank wird zum Hobbydetektiv",
    "erste neue Spei\u00dfekarte ist f\u00fcrm M\u00fcll",
    "erste neue Variante der Spei\u00dfekarte ist Frank zu lang",
    "Preiskalkulationen liegen viel zu niedrig",
    "Eispraline als Dessert",
    "Tiramisu als Dessert",
    "Pfannkuchen/Crepe mit Eis als Dessert",
    "\"gut b\u00fcrgerliche K\u00fcche\"",
    "es gibt Schnitzel auf der Karte",
    "es gibt Burger auf der Karte",
    "Restaurant unter 10K Schulden",
    "jemand bricht in Tr\u00e4nen aus",
    "The Script - Hall of Fame",
    "AWOLNATION - Sail",
    "Bourani - Ein Hoch auf unst",
    "Aloe Blacc - I Need A Dollar",
    "Metallica Song",
    "Peter Fox Song",
    "Hintergrundsong fasst exakt auf was vorher gesagt wurde/passiert ist",
    "Kabel 1 dreht S\u00e4ttigung runter beim \"ekligen\" Essen",
    "Kabel 1 mit \u00fcbertriebener Lense Flare nach Umgestaltung",
    "Kabel 1 mit \u00fcbertriebener Bearbeitung beim vorher/nachher Vergleich",
    "Team ist zu sehen",
    "Es wird mit dem Team gesprochen",
    "Der Imbiss von Franks Eltern wird erw\u00e4hnt",
    "Frank sagt, dass die Nachspeise Weltklasse sei",
    "Frank lobt die Gerichte im ersten Testessen",
    "Es gibt einen \"Frank\"-Namensvetter",
    "Der B\u00fcrgermeister kommt vorbei",
    "Der Verp\u00e4chter auch beim finallen Testessen dabei",
    "Richtiger Steuerberater wird gerufen",
    "Ein High Five/Bro Fist geht unangenehm schief",
    "Mindestens 3x lautes Handabkltaschen/-shaken",
    "Etwas \"brennt\" auf dem Herd",
    "Frank sagt, dass seine Oma/Schwester/Mama etwas so kochen w\u00fcrde",
    "Frank baut seine Burger",
    "Vollbest\u00fcckter Tisch mit Gem\u00fc\u00dfe beim Lernkochen mit Frank",
    "TK-Ware wird genutzt",
    "Maggi/Saucenpulver in der K\u00fcche",
    "Neues Schild durch Schild24.de",
    "Neues Equipment durch topevent gesponsert",
    "\"die Tabelle f\u00fcllt sich langsam\" hide",
    "Plastikpflanzen",
    "Frank redet englisch",
    "Frank f\u00e4hrt selbst",
    "Frank bekommt ein Abschiedsgeschenk",
    "Frank hat eine \u00fcberraschung",
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
            updateChart(message.substring(4));
        } else if (message.startsWith("start")) {
            deleteChart();
            createNewChart();
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

const ctx = document.getElementById('myChart').getContext('2d');
const chartBox = document.getElementById('bingoBets');
var myChart;

function updateChart(vote) {
    var labelIndex = myChart.data.labels.indexOf(vote);
    
    if (labelIndex !== -1) {
        myChart.data.datasets[0].data[labelIndex]++;
        myChart.update();
    }
}

function deleteChart() {
    if (myChart !== undefined) {
        chartBox.style.display = 'none';
        myChart.destroy();
    }
}

function createNewChart() {
    chartBox.style.display = 'block';
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            datasets: [{
                label: 'Bingo Wetten',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: 'green'
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Arial', // Schriftart für Legende
                            weight: 'bold', // Fettdruck für Legende
                            size: 15,
                        },
                        color: 'white' // Schriftfarbe für Legende
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Anzahl Bingos', // Titel der X-Achse
                        font: {
                            family: 'Arial', // Schriftart für X-Achse
                            weight: 'bold', // Fettdruck für X-Achse
                            size: 15,
                        },
                        color: 'white' // Schriftfarbe für X-Achse
                    },
                    ticks: {
                        font: {
                            family: 'Arial', // Schriftart für X-Achsen-Zahlen
                            weight: 'bold', // Fettdruck für X-Achsen-Zahlen
                            size: 15,
                        },
                        color: 'white' // Schriftfarbe für X-Achsen-Zahlen
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Anzahl Wetten', // Titel der Y-Achse
                        font: {
                            family: 'Arial', // Schriftart für Y-Achse
                            weight: 'bold', // Fettdruck für Y-Achse
                            size: 15,
                        },
                        color: 'white' // Schriftfarbe für Y-Achse
                    },
                    ticks: {
                        font: {
                            family: 'Arial', // Schriftart für X-Achsen-Zahlen
                            weight: 'bold', // Fettdruck für X-Achsen-Zahlen
                            size: 15,
                        },
                        color: 'white' // Schriftfarbe für X-Achsen-Zahlen
                    }
                }
            },
            animation: {
                duration: 0 // Deaktiviert die Aufbauanimation
            }
        }
    });
}

function startVoting() {
    const msg = id + "<startBingo";
    socket.send(msg);
    console.log('Nachricht an den Server gesendet:', msg);
}

function stopBingo() {
    const bingos = document.getElementById('numOfBingos').value;
    const msg = id + "<!stopBingo " + bingos;
    socket.send(msg);
    console.log('Nachricht an den Server gesendet:', msg);
}

function clearBets() {
    const msg = id + "<clearBets";
    socket.send(msg);
    console.log('Nachricht an den Server gesendet:', msg);
}

var mega = 0;
var zwinker = 0;
const megaText = document.getElementById("megaCounter");
const zwinkerText = document.getElementById("zwinkerCounter");

function megaCounter() {
    mega++;
    megaText.innerText = mega;
    const msg = id + "<megaplus";
    socket.send(msg);
}

function zwinkerCounter() {
    zwinker++;
    zwinkerText.innerText = zwinker;
}

function reset() {
    mega = 0;
    zwinker = 0;
    megaText.innerText = 0;
    zwinkerText.innerText = 0;
    const msg = id + "<megaclear";
    socket.send(msg);
}