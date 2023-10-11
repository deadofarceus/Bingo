var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const id = params.get('id');
const type = params.get('type');
const channel = params.get('channel');

function connectWebSocket() {
    const socket = new WebSocket(`wss://rosin-bingo.glitch.me?id=${id}&type=${type}&channel=${channel}`);
    // const socket = new WebSocket(`ws://localhost:8080?id=${id}&type=${type}&channel=${channel}`);
    socket.pingTimeout = 315360000000; // 10 years in milliseconds
    
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

        const modEvent = JSON.parse(message);

        if (modEvent.type === "RosinBingo/vote") {
            updateChart(""+modEvent.data.voteNumber);
        } else if (modEvent.type === "RosinBingo/votingControl") {
            if (modEvent.data.control === "startVoting") {
                createNewChart();
            } else if (modEvent.data.control === "stopVoting") {
                deleteChart();
            }
        } else if (modEvent.type === "RosinBingo/bingo") {
            console.log(modEvent.data);
            renderText(modEvent.data.bingoCards);
            adjustTextSize();
            megaCounter(modEvent.data.mega);
        }
    };
}

// Initialer Verbindungsaufbau
connectWebSocket();

function renderText(tableHtml) {
    const texts = document.querySelectorAll('.displayText');
    const textContainers = document.querySelectorAll('.text-container');

    let startIndex = tableHtml.indexOf("<textbegin>");
    let endIndex = tableHtml.indexOf("<textbegin>", startIndex + 1);

    for (let index = 0; index < texts.length; index++) {
        if (startIndex !== -1 && endIndex !== -1) {
            if (tableHtml.substring(startIndex + 11, endIndex).includes("marked")) {
                startIndex = startIndex + 29;
                textContainers[index].classList.add("marked");

                const example = tableHtml.substring(startIndex, endIndex);
                var alhye = example.trim();
                if (alhye.includes("hide")) {
                    alhye = alhye.replace("hide", "");
                }

                texts[index].textContent = alhye;
            } else {
                startIndex = startIndex + 22;
                textContainers[index].classList.remove("marked");

                const example = tableHtml.substring(startIndex, endIndex);
                const alhye = example.trim();

                if (!alhye.includes("hide") && !alhye.includes("Philly")) {
                    texts[index].textContent = alhye;
                } else {
                    texts[index].textContent = "Verdeckt"
                }
            }
            startIndex = endIndex;
            endIndex = tableHtml.indexOf("<textbegin>", startIndex + 1);
        } else {
            texts[index].textContent = "";
        }
    }
}

function adjustTextSize() {
    const textContainers = document.querySelectorAll('.text-container');

    textContainers.forEach((container) => {
        const textElement = container.querySelector('text');

        if (textElement.textContent === "") {
            return;
        }

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        let fontSize = 1;
        let lastFontSize = null;
        textElement.style.fontSize = `${fontSize}px`;

        while (textElement.offsetWidth <= containerWidth && textElement.offsetHeight <= containerHeight) {
            lastFontSize = fontSize;
            fontSize += 1;
            textElement.style.fontSize = `${fontSize}px`;
        }
        textElement.style.fontSize = `${lastFontSize}px`;
    });
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
    chartBox.style.display = 'none';
    myChart.destroy();
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

const megaText = document.getElementById("megaCounter");
var mega = 0;

function megaCounter(counter) {
    mega = counter;
    megaText.innerText = mega;
}